export default function About() {
  return (
    <div className="container-ui space-y-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold">About Us</h1>
        <p className="mt-2 text-brand-muted">Home / About us</p>
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold">Where every drive feels extraordinary</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Variety Brands', 'Awesome Suport', 'Maximum Freedom', 'Flexibility On The Go'].map((x) => (
            <div key={x}><h3 className="font-semibold">{x}</h3><p className="text-sm text-brand-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p></div>
          ))}
        </div>
      </section>
      <img className="h-80 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80" alt="about" />
    </div>
  );
}
