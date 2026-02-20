import { useMemo, useState } from 'react';
import CarCard from '../components/CarCard';
import { cars, categories } from '../data/cars';

export default function Vehicles() {
  const [active, setActive] = useState('All vehicles');
  const filtered = useMemo(() => (active === 'All vehicles' ? cars : cars.filter((c) => c.category === active)), [active]);

  return (
    <div className="container-ui">
      <h1 className="mb-7 text-center text-6xl font-bold">Select a vehicle group</h1>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)} className={`rounded-full px-5 py-2 text-sm ${active === cat ? 'bg-brand-primary text-white' : 'bg-white'}`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}
