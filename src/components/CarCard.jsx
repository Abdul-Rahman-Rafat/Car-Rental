import { Link } from 'react-router-dom';
import Button from './Button';

export default function CarCard({ car }) {
  return (
    <article className="card-soft p-4">
      <img src={car.images[0]} alt={car.name} className="h-40 w-full rounded-xl object-cover" />
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{car.name}</h3>
          <p className="text-sm text-brand-muted">{car.model}</p>
        </div>
        <p className="text-right text-brand-primary"><span className="text-3xl font-bold">${car.pricePerDay}</span><br /><span className="text-xs text-brand-muted">per day</span></p>
      </div>
      <div className="mt-3 flex gap-3 text-xs text-brand-muted">
        <span>{car.transmission}</span>
        <span>{car.fuelType}</span>
        <span>{car.air}</span>
      </div>
      <Link to={`/vehicles/${car.id}`} className="mt-4 block"><Button className="w-full">View Details</Button></Link>
    </article>
  );
}
