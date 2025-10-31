import { Link } from 'react-router-dom';
import {
  Code,
  BrainCircuit,
  ServerCog,
  Stethoscope,
  CreditCard,
  ShieldCheck,
  MonitorSmartphone,
} from 'lucide-react';

const services = [
  {
    title: 'Software Engineering',
    description: 'Robust, scalable software solutions tailored to your business needs.',
    icon: Code,
    slug: 'software-engineering',
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent systems powered by machine learning and data-driven insights.',
    icon: BrainCircuit,
    slug: 'ai-solutions',
  },
  {
    title: 'System Architecture',
    description: 'Designing resilient, modular, and future-proof system architectures.',
    icon: ServerCog,
    slug: 'system-architecture',
  },
  {
    title: 'Healthcare IT',
    description: 'Digital solutions for clinics, hospitals, and health platforms.',
    icon: Stethoscope,
    slug: 'healthcare-it',
  },
  {
    title: 'Fintech Technologies',
    description: 'Secure, scalable platforms for financial services and digital payments.',
    icon: CreditCard,
    slug: 'fintech-technologies',
  },
  {
    title: 'Resilient Systems Design',
    description: 'Consulting on fault-tolerant, high-availability systems for critical operations.',
    icon: ShieldCheck,
    slug: 'resilient-systems',
  },
  {
    title: 'IT Systems Deployment',
    description: 'End-to-end setup, monitoring, and evolution of IT infrastructure.',
    icon: MonitorSmartphone,
    slug: 'it-deployment',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, description, icon: Icon, slug }) => (
          <Link
            to={`/services/${slug}`}
            key={title}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 border border-gray-200 hover:border-blue-900"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Icon className="w-8 h-8 text-blue-900" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
