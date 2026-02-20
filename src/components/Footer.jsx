export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 py-10">
      <div className="container-ui grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">🚗 Car Rental</p>
          <p className="mt-3 text-brand-muted">Faucibus faucibus pellentesque dictum turpis.</p>
        </div>
        <div>
          <p className="font-semibold">Address</p>
          <p className="text-brand-muted">Oxford Ave. Cary, NC 27511</p>
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-brand-muted">nwiger@yahoo.com</p>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p className="text-brand-muted">+537 547-6401</p>
        </div>
      </div>
    </footer>
  );
}
