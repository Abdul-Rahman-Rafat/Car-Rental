import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, enum: ['Luxury', 'SUV', 'Sport'], required: true },
    pricePerDay: { type: Number, required: true },
    fuelType: { type: String, required: true },
    transmission: { type: String, required: true },
    seats: { type: Number, required: true },
    images: [{ type: String }],
    availability: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model('Car', carSchema);
