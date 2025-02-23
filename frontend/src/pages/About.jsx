import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 mt-2">
      {/* Hero Section */}
      <div className="relative bg-red-950 text-yellow-100 py-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold"
        >
          About SmartCanteen
        </motion.h1>
        <p className="mt-3 text-sm md:text-lg text-yellow-300">Fast, Fresh & Smart – Your Canteen, Reimagined!</p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6 flex flex-col  border-4 md:border-0  ">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-950">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600 ">
          SmartCanteen is dedicated to bringing seamless and efficient food ordering experiences
          to students and staff. We prioritize <span className="text-orange-600">**speed, quality, and convenience**</span>to redefine the 
          way you enjoy meals at your canteen.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12">
          <h2 className="text-2xl md:text-3xl  text-center font-semibold text-red-950 mb-6">Why Choose SmartCanteen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🍔 Wide Variety</h3>
              <p className="text-gray-600">
                From breakfast to dinner, we offer a diverse menu to satisfy every craving.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🚀 Fast Service</h3>
              <p className="text-gray-600">
                Our efficient ordering system ensures quick and hassle-free service.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">💚 Healthy Options</h3>
              <p className="text-gray-600">
                We prioritize fresh ingredients and healthy meal options for our customers.
              </p>
            </div>
          </div>
        </div>

      {/* Team Section */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-red-950">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {["Jhonny Dep", "Leonardo DiCaprio", "Tom Cruise"].map((name, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }} 
                viewport={{ once: true }}
                className="bg-gray-100 p-6 rounded-xl shadow-md"
              >
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="text-gray-500">Co-Founder & Developer</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center py-7 px-6 bg-gray-200 mb-0">
        <h2 className="text-xl md:text-3xl font-semibold text-red-950">Get in Touch</h2>
        <p className="mt-4 text-sm md:text-lg text-gray-600">
          Have questions or feedback? Reach out to us at 
          <a href="mailto:smartcanteen@gmail.com" className="text-orange-600 font-medium"> smartcanteen@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
