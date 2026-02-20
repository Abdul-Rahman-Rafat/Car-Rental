import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['Vehicles', '/vehicles'],
  ['Details', '/vehicles/bmw-x7'],
  ['About Us', '/about'],
  ['Contact Us', '/contact'],
];

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="container-ui flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold">🚗 Car Rental</Link>
        <nav className="hidden gap-7 text-sm md:flex">
          {links.map(([name, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => (isActive ? 'font-semibold text-brand-primary' : 'text-black')}>
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="text-right text-xs">
          <p className="text-brand-primary">📞 Need help?</p>
          <p className="font-semibold">+996 247-1680</p>
        </div>
      </div>
    </header>
  );
}
