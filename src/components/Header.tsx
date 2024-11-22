import { Link } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/doctors', text: 'Our Doctors' },
  { href: '/appointment', text: 'Book Appointment' },
  { href: '/contact', text: 'Contact' }
];

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">MedCare</Link>
          <ul className="flex space-x-6">
            {navItems.map(item => (
              <li key={item.href}>
                <Link to={item.href} className="text-gray-600 hover:text-primary transition-colors">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}