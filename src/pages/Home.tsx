import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <Layout title="Welcome">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Medical Care at Your Fingertips</h1>
          <p className="text-xl mb-8">Book appointments with our experienced doctors</p>
          <a href="/appointment" className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">General Medicine</h3>
              <p className="text-gray-600">Comprehensive medical care for all your health needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Specialized Care</h3>
              <p className="text-gray-600">Expert specialists for specific medical conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Preventive Care</h3>
              <p className="text-gray-600">Regular check-ups and preventive healthcare services.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}