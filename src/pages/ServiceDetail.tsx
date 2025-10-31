import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Code,
  BrainCircuit,
  ServerCog,
  Stethoscope,
  CreditCard,
  ShieldCheck,
  MonitorSmartphone,
} from 'lucide-react';

const serviceMap = {
  'software-engineering': {
    title: 'Software Engineering',
    description: 'We build robust, scalable software tailored to your business needs — from APIs to full-stack platforms.',
    icon: Code,
    useCases: ['Custom web apps', 'Backend APIs', 'Mobile-first platforms'],
    industries: ['Startups', 'Enterprise SaaS', 'Healthcare'],
  },
  'ai-solutions': {
    title: 'AI Solutions',
    description: 'We design intelligent systems powered by machine learning, NLP, and predictive analytics.',
    icon: BrainCircuit,
    useCases: ['Chatbots', 'Recommendation engines', 'Fraud detection'],
    industries: ['Fintech', 'Retail', 'Healthcare'],
  },
  'system-architecture': {
    title: 'System Architecture',
    description: 'We architect resilient, modular systems that scale with your business and adapt to change.',
    icon: ServerCog,
    useCases: ['Microservices', 'Event-driven systems', 'Cloud-native platforms'],
    industries: ['Logistics', 'Finance', 'Telecom'],
  },
  'healthcare-it': {
    title: 'Healthcare IT',
    description: 'We digitize clinics, hospitals, and health platforms with secure, interoperable systems.',
    icon: Stethoscope,
    useCases: ['EMR systems', 'Telehealth platforms', 'Patient portals'],
    industries: ['Hospitals', 'Clinics', 'Health startups'],
  },
  'fintech-technologies': {
    title: 'Fintech Technologies',
    description: 'We build secure, scalable platforms for digital payments, lending, and financial services.',
    icon: CreditCard,
    useCases: ['Payment gateways', 'Digital wallets', 'Loan management systems'],
    industries: ['Banks', 'Fintech startups', 'E-commerce'],
  },
  'resilient-systems': {
    title: 'Resilient Systems Design',
    description: 'We consult on fault-tolerant, high-availability systems for mission-critical operations.',
    icon: ShieldCheck,
    useCases: ['Disaster recovery', 'Redundant infrastructure', 'Load balancing'],
    industries: ['Aviation', 'Finance', 'Government'],
  },
  'it-deployment': {
    title: 'IT Systems Deployment',
    description: 'We handle end-to-end setup, monitoring, and evolution of IT infrastructure.',
    icon: MonitorSmartphone,
    useCases: ['Server provisioning', 'Monitoring dashboards', 'Remote access systems'],
    industries: ['SMEs', 'Retail chains', 'Tech startups'],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceMap[slug as keyof typeof serviceMap];

  if (!service) {
    return (
      <section className="py-20 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <p>We couldn’t find the service you’re looking for.</p>
      </section>
    );
  }

  const { title, description, icon: Icon, useCases, industries } = service;

  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <Helmet>
        <title>{`Sharp Turn Technologies | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <Icon className="w-10 h-10 text-blue-900" />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        <p className="text-lg text-gray-700 mb-8">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Use Cases</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Industries Served</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Contact Us About {title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
