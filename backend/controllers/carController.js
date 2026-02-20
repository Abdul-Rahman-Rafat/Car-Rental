import Car from '../models/Car.js';

export async function getCars(req, res) {
  const { brand, category, minPrice, maxPrice } = req.query;
  const query = {};
  if (brand) query.brand = brand;
  if (category) query.category = category;
  if (minPrice || maxPrice) query.pricePerDay = {};
  if (minPrice) query.pricePerDay.$gte = Number(minPrice);
  if (maxPrice) query.pricePerDay.$lte = Number(maxPrice);

  const cars = await Car.find(query).sort({ createdAt: -1 });
  return res.json(cars);
}

export async function getCarById(req, res) {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).json({ message: 'Car not found' });
  return res.json(car);
}
