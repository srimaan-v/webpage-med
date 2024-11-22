import Layout from '../layouts/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Main Office</h3>
              <p className="text-gray-600">123 Medical Center Drive</p>
              <p className="text-gray-600">City, State 12345</p>
              <p className="text-gray-600">United States</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@medcare.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}