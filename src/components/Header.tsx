const Header = () => (
  <header className="bg-blue-900 text-white p-4 flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <img src="/logo.png" alt="Sharp Turn Technologies Logo" className="h-12 w-auto" />
      <h1 className="text-2xl font-bold">Sharp Turn Technologies</h1>
    </div>
    <nav className="space-x-4">
      <a href="#services" className="hover:text-yellow-400">Services</a>
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
    </nav>
  </header>
);

export default Header