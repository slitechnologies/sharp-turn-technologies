const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-10">
          Sharp Turn Technologies was born from a bold vision: to lead with innovation and conquer complexity.
          We build resilient systems, empower businesses, and shape digital futures across healthcare, fintech, and AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Innovation</h3>
            <p className="text-sm text-gray-600">We challenge norms and build future-ready solutions.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Resilience</h3>
            <p className="text-sm text-gray-600">Our systems are built to endure and evolve.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Integrity</h3>
            <p className="text-sm text-gray-600">We lead with transparency, trust, and purpose.</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Meet the Visionaries</h3>
          <p className="text-sm text-gray-600">
            Our team blends technical rigor with strategic insight. From backend architecture to brand design,
            we collaborate to build systems that speak for themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
