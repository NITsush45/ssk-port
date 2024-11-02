import  { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
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
        My Quora Blog
      </motion.h1>

      <motion.p
        className="mb-4 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to my blog where I share various perspectives on life,
        particularly my journey through JEE studies and the emotional experiences
        that come with it. You can check out my answers on Quora where I discuss
        challenges, study tips, and the emotional rollercoaster that students
        often face.
      </motion.p>

      <motion.p
        className="mb-4 text-center max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I believe sharing insights can help not only myself but also others who
        are navigating similar paths. Feel free to explore my Quora profile for
        more in-depth discussions:{" "}
        <a
          href="https://www.quora.com/profile/Ssk-296"
          className="text-indigo-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ssk-296 on Quora
        </a>
      </motion.p>

      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4 mt-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Topics I Cover
      </motion.h2>

      <motion.ul
        className="list-disc list-inside mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <li>Daily life as a JEE student</li>
        <li>Study strategies and techniques</li>
        <li>Dealing with stress and emotions</li>
        <li>Balancing academics and personal life</li>
        <li>Sharing motivational experiences</li>
      </motion.ul>

      <motion.p
        className="text-center max-w-2xl px-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Join me on this journey as I explore the highs and lows of preparing for
        one of the toughest exams in India. Together, we can motivate and
        support each other!
      </motion.p>

      <motion.a
        href="https://www.quora.com/profile/Ssk-296"
        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Visit My Quora Profile
      </motion.a>
    </motion.div>
  );
};

export default Blog;
