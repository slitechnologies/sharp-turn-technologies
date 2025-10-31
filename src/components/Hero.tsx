import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-6 md:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Born to Lead, Groomed to Conquer
        </h2>
        <p className="text-lg md:text-xl mb-8">
          We build resilient, intelligent, and scalable technology solutions for the future.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
        >
          Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
