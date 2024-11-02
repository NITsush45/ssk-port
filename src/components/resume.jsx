import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import MyResume from "../assets/Resume.pdf";

function Resume() {
  const [darkMode, setDarkMode] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`min-h-screen flex flex-col items-center justify-center transition duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full transition duration-300 ${darkMode ? "bg-indigo-700 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"} text-white`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <motion.p
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Click the button below to download my resume.
      </motion.p>

      <motion.a
        href={MyResume}
        download
        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Download Resume
      </motion.a>
    </motion.div>
  );
}

export default Resume;
