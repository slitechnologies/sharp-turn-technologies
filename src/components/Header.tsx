import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Sharp Turn Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold">Sharp Turn Technologies</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800 px-4 py-2 space-y-2 text-sm font-medium">
          <Link to="/" className="block hover:text-yellow-400">Home</Link>
          <Link to="/services" className="block hover:text-yellow-400">Services</Link>
          <Link to="/about" className="block hover:text-yellow-400">About</Link>
          <Link to="/contact" className="block hover:text-yellow-400">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;




/// const Header = () => (
//   <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
//     <div className="flex items-center space-x-4">
//       <img src="/logo.png" alt="Sharp Turn Technologies Logo" className="h-12 w-auto" />
//       <h1 className="text-2xl font-bold">Sharp Turn Technologies</h1>
//     </div>
//     <nav className="space-x-4">
//       <a href="#services" className="hover:text-yellow-400">Services</a>
//       <a href="#contact" className="hover:text-yellow-400">Contact</a>
//     </nav>
//   </header>
// );

// export default Header