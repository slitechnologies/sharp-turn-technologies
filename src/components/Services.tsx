const services = [
  "Software Engineering Solutions",
  "AI Solutions",
  "System Architecture",
  "Healthcare Digital Solutions",
  "Fintech Technologies",
  "Resilient Systems Design",
  "IT Systems Building, Deployment, Monitoring & Evolution"
];

const Services = () => (
  <section id="services" className="bg-white text-gray-800 py-16 px-8">
    <h3 className="text-3xl font-bold mb-6 text-center">Our Services</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, idx) => (
        <li key={idx} className="bg-blue-100 p-4 rounded shadow hover:bg-blue-200">
          {service}
        </li>
      ))}
    </ul>
  </section>
);
export default Services;