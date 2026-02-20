import { Link, useParams } from 'react-router-dom';
import { cars } from '../data/cars';
import Button from '../components/Button';
import CarCard from '../components/CarCard';

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((item) => item.id === id) || cars[0];

  return (
    <div className="container-ui space-y-14">
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold">{car.name}</h1>
          <p className="mt-2 text-brand-primary"><span className="text-5xl font-bold">${car.pricePerDay}</span> / day</p>
          <img src={car.images[0]} alt={car.name} className="mt-6 h-64 w-full rounded-2xl object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Technical Specification</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {[['Gear Box', car.gearBox], ['Fuel', car.fuelType], ['Doors', car.doors], ['Air Conditioner', 'Yes'], ['Seats', car.seats], ['Distance', car.distance]].map(([k, v]) => (
              <div key={k} className="card-soft p-4"><p className="font-semibold">{k}</p><p className="text-brand-muted">{v}</p></div>
            ))}
          </div>
          <Button className="mt-6 w-full">Rent a car</Button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-5xl font-bold">Other cars</h3>
          <Link to="/vehicles" className="font-semibold">View All →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cars.filter((c) => c.id !== car.id).slice(0, 6).map((item) => <CarCard key={item.id} car={item} />)}
        </div>
      </section>
    </div>
  );
}
