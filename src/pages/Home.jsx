import { cars } from '../data/cars';
import BookingForm from '../components/BookingForm';
import CarCard from '../components/CarCard';

export default function Home() {
  return (
    <div className="container-ui space-y-16">
      <section className="grid gap-6 rounded-3xl bg-brand-primary p-6 text-white md:grid-cols-2 md:p-8">
        <div className="py-3">
          <h1 className="text-5xl font-bold leading-tight">Experience the road like never before</h1>
          <p className="mt-4 max-w-md text-white/85">Aliquam adipiscing elit, semper morbi. Purus non eu accumsan in eget sed purus.</p>
          <img src={cars[0].images[0]} alt="car" className="mt-6 h-52 w-full rounded-2xl object-cover opacity-90" />
        </div>
        <BookingForm />
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-5xl font-bold">Choose the car that suits you</h2>
          <a href="/vehicles" className="font-semibold">View All →</a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 6).map((car) => <CarCard key={car.id} car={car} />)}
        </div>
      </section>

      <section className="rounded-3xl bg-brand-primary p-10 text-white text-center">
        <h3 className="text-4xl font-bold">Facts In Numbers</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {['540+ Cars', '20k+ Customers', '25+ Years', '20m+ Miles'].map((item) => (
            <div key={item} className="rounded-xl bg-white/90 p-4 text-brand-primary font-bold">{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
