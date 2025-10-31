import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">Sharp Turn Technologies</h3>
          <p className="text-sm text-gray-300">
            Born to lead, groomed to conquer. We build resilient systems for a smarter future.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <div className="flex flex-wrap gap-4">
            <a href="https://instagram.com/sharpturntech" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-yellow-400" /></a>
            <a href="https://facebook.com/sharpturntech" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5 hover:text-yellow-400" /></a>
            <a href="https://linkedin.com/company/sharpturntech" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-yellow-400" /></a>
            <a href="mailto:info@sharpturn.tech"><Mail className="w-5 h-5 hover:text-yellow-400" /></a>
            <a href="https://wa.me/26377xxxxxxx" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5 hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Sharp Turn Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
