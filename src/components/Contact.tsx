import {
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Phone,
  Mail,
  Send,
} from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/sharpturntech' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/sharpturntech' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/sharpturntech' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/263773598539' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/sharpturntech' },
  { name: 'Email', icon: Mail, url: 'mailto:info@sharpturn.tech' },
  { name: 'Phone', icon: Phone, url: 'tel:+263773598539' },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      {/* Netlify Form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="max-w-xl mx-auto space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <p className="text-lg font-semibold mb-4">Reach us directly:</p>
        <div className="flex flex-wrap justify-center gap-6 text-blue-900 text-lg">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="flex items-center space-x-2 hover:text-yellow-500 transition"
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
