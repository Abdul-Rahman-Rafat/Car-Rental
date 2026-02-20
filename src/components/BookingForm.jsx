import Button from './Button';
import Input from './Input';

export default function BookingForm() {
  return (
    <form className="card-soft p-5">
      <h3 className="mb-4 text-2xl font-semibold">Book your car</h3>
      <div className="space-y-3">
        <Input label="Select type" placeholder="Luxury" />
        <Input label="Place of rental" placeholder="Dubai" />
        <Input label="Place of return" placeholder="Airport" />
        <Input label="Rental date" type="date" />
        <Input label="Return date" type="date" />
      </div>
      <Button className="mt-4 w-full">Book now</Button>
    </form>
  );
}
