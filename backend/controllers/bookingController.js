import Booking from '../models/Booking.js';
import Car from '../models/Car.js';

function calculateTotalPrice(pickupDate, returnDate, pricePerDay) {
  const msInDay = 1000 * 60 * 60 * 24;
  const days = Math.max(1, Math.ceil((new Date(returnDate) - new Date(pickupDate)) / msInDay));
  return days * pricePerDay;
}

async function isCarAvailable(carId, pickupDate, returnDate) {
  const conflict = await Booking.findOne({
    carId,
    status: { $in: ['pending', 'confirmed'] },
    $or: [
      { pickupDate: { $lte: returnDate }, returnDate: { $gte: pickupDate } },
      { pickupDate: { $gte: pickupDate, $lte: returnDate } },
    ],
  });
  return !conflict;
}

export async function createBooking(req, res) {
  const { carId, pickupDate, returnDate } = req.body;
  if (!carId || !pickupDate || !returnDate) return res.status(400).json({ message: 'Missing booking fields' });
  if (new Date(returnDate) <= new Date(pickupDate)) return res.status(400).json({ message: 'Return date must be after pickup date' });

  const car = await Car.findById(carId);
  if (!car) return res.status(404).json({ message: 'Car not found' });

  const available = await isCarAvailable(carId, new Date(pickupDate), new Date(returnDate));
  if (!available) return res.status(409).json({ message: 'Car unavailable for selected dates' });

  const totalPrice = calculateTotalPrice(pickupDate, returnDate, car.pricePerDay);
  const booking = await Booking.create({ userId: req.user.id, carId, pickupDate, returnDate, totalPrice, status: 'pending' });
  return res.status(201).json(booking);
}

export async function getUserBookings(req, res) {
  const bookings = await Booking.find({ userId: req.params.id }).populate('carId').sort({ createdAt: -1 });
  return res.json(bookings);
}

export async function updateBookingStatus(req, res) {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: 'Booking not found' });
  booking.status = req.body.status || booking.status;
  await booking.save();
  return res.json(booking);
}
