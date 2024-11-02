import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactUs() {
  const [formData, setFormData] = useState({
    companyName: "",
    city: "",
    contactNumber: "",
    name: "",
    email: "",
    message: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      city: "",
      contactNumber: "",
      companyName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen transition duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-indigo-600 to-blue-500 text-white"}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition duration-300 ${darkMode ? "bg-indigo-700 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"} text-white`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8 text-center animate-fadeIn"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        className={`bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full transition duration-300 ${darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="companyName">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              companyName
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`border rounded-md p-2 focus:outline-none focus:ring-2 transition ${darkMode ? "border-gray-600 bg-gray-800 text-white focus:ring-indigo-500" : "border-gray-300 focus:ring-indigo-500"}`}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
      <div className="flex flex-col items-center mt-8 space-y-2">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-indigo-200 mr-2" />
          <span>H-4 Dronacharya Bhawan NIT Kurukshetra, Kurukshetra,  Haryana 136119, India</span>

        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-indigo-200 mr-2" />
          <span>sushiitantmi45@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-indigo-200 mr-2" />
          <span>(+91)7905977764</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
