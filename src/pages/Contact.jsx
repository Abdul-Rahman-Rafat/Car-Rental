import Button from '../components/Button';
import Input from '../components/Input';

export default function Contact() {
  return (
    <div className="container-ui max-w-3xl">
      <div className="card-soft p-8">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-2 text-brand-muted">Tell us your travel plan and we will prepare your car.</p>
        <form className="mt-6 space-y-4">
          <Input label="Full Name" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Phone" placeholder="+537 547-6401" />
          <label className="block text-xs text-brand-muted">Message
            <textarea className="mt-2 min-h-36 w-full rounded-lg border border-black/10 p-3 outline-none focus:border-brand-primary" />
          </label>
          <Button>Send message</Button>
        </form>
      </div>
    </div>
  );
}
