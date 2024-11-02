import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuMoonStar } from "react-icons/lu";
import Logo from "../assets/logo.png";
import Pic from "../assets/pic.jpg";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotated, setIsRotated] = useState(false);
  const [moveDirection, setMoveDirection] = useState(0);
  const images = [Pic, Pic1, Pic2, Pic3];

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const updateBackground = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const xPercent = (x / windowWidth) * 100;
      const yPercent = (y / windowHeight) * 100;

      setBackgroundStyle({
        background: isDarkMode
          ? `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(79, 70, 229, 0.9), rgba(34, 34, 34, 0.8) 30%, rgba(15, 15, 15, 0.9) 60%)`
          : `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 223, 70, 0.9), rgba(255, 215, 100, 0.6) 20%, rgba(255, 240, 150, 0.4) 40%)`,
        transition: "background 0.4s ease",
      });
    };

    window.addEventListener("mousemove", updateBackground);

    return () => {
      window.removeEventListener("mousemove", updateBackground);
    };
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate(`/${section}`);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Heyya! It's Sushant here....Let me introduce myself",
    "Welcome to my Website....Let's Explore!",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleOffscreen = () => {
    setMoveDirection((prev) => {
      if (prev === 0) return -1;
      if (prev === -1) return 1;
      return 0;
    });
  };
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div
      style={backgroundStyle}
      className="min-h-screen flex flex-1 flex-col transition-colors duration-500"
    >
      <header className="bg-indigo-600 dark:bg-indigo-800 flex flex-wrap items-center justify-between p-4 shadow min-w-full relative">
        <img
          src={Logo}
          alt="Logo"
          className="h-14 w-14 rounded-full animate-rollingLogo"
        />
        <div className="flex items-center flex-wrap space-x-2 md:space-x-4">
        {[
          "About",
          "Blog",
          "Resume",
          "Contact Us",
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.toLowerCase())}
            className="bg-indigo-600 dark:bg-indigo-700 text-green-200 dark:text-indigo-100 font-bold py-2 px-4 mt-2 rounded-xl mx-4 cursor-pointer shadow-lg transition-transform transform active:scale-105 hover:underline hover:scale-110 hover:shadow-green-400 dark:hover:shadow-indigo-100"
          >
            {item}
          </button>
        ))}
        </div>
        <div className="flex items-center mx-20 mt-4">
          {isDarkMode ? (
            <FaSun
              className="text-white cursor-pointer transition-colors duration-500"
              onClick={toggleTheme}
            />
          ) : (
            <LuMoonStar
              className="text-black cursor-pointer transition-colors duration-500"
              onClick={toggleTheme}
            />
          )}
          <span className="ml-2 text-black dark:text-white font-light">
            {isDarkMode ? "Light" : "Dark"}
          </span>
        </div>
      </header>

      <div className="flex justify-center items-center mt-12 mb-6">
        <h1
          className={`font-serif font-bold text-2xl text-slate-800 dark:text-white transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {texts[currentText]}
        </h1>
      </div>

      <main className="flex-1 flex flex-row items-stretch p-6 space-x-6">
        <section className="flex-1 flex flex-col justify-center items-center p-6 bg-slate-300 dark:bg-gray-800 rounded-lg shadow relative h-[400px]">
          <h2 className="font-bold font-serif text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 p-2 rounded-md shadow-md z-0 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl max-w-lg">
            Intro....
          </h2>
          <p className="w-full text-sm text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 p-4 rounded-md shadow-md z-0 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl max-w-lg overflow-y-auto max-h-[300px]">
            {`I am Sushant Kumar currently pursuing my third year Bachelors of Technology from National Institute of Technology, Kurukshetra in dept. of Electronics & communication. I am having proficiency in languages like C, C++, python, Java, JavaScript, HTML, CSS, C#, Dart also having strong hold on MERN tech stack. I as a Software Developer, my background(Web Development, ios/Android Development) includes working with essential working tools like Docker, Git, GitHub and Postman along with I have worked with many frameworks like Django, jupyter, OpenCV, Flask, Streamlit, PineconeDB. I can also handle some libraries & tools like TensorFlow and I have analyzed the tensorflow working in Neural Network playground also sklearn, PyTorch, OpenAI, SpeechRecognition, Pandas, Matplotlib, Pygame, VSCode, Unity, GIMP, Balsamiq, Botpress, Android Studio, Git, Google Cloud Platforms, AssemblyAI, Microsoft Azure, Firebase, MySQL, pgAdminn4, Tailwind CSS, DaisyUI, Three.js, Hugging Face API, Google Colab. All these were on which I have worked and as I told earlier I am an ECE undergrad here so I have to work with hardware development too so, I am familiar with HDL as we have to work on that for academics also MATLAB and AutoCAD.`
              .split(" ")
              .map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-1 transition-transform duration-300 ease-in-out hover:scale-125"
                >
                  {word}
                </span>
              ))}
          </p>
        </section>

        <div className="relative w-96 h-auto flex items-start justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Pic ${index + 1}`}
              onClick={toggleOffscreen}
              onMouseEnter={() => setIsRotated((prev) => !prev)}
              className={`absolute w-80 h-96 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform ${
                index === currentImageIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              } ${
                moveDirection === -1
                  ? "translate-x-[-100%]"
                  : moveDirection === 1
                    ? "translate-x-[100%]"
                    : "translate-x-0"
              } ${
                isRotated ? "hover:rotate-6" : "hover:-rotate-6"
              } hover:scale-125 hover:translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:brightness-110 cursor-pointer`}
              style={{
                transition: "opacity 1s ease-in-out, z-index 0.5s ease",
                objectFit: "cover",
              }}
            />
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-700 transition-all duration-300"></div>
        </div>

        <section className="flex-1 flex flex-col justify-center items-center p-6 bg-slate-300 dark:bg-gray-800 rounded-lg shadow relative h-[400px]">
          <h2 className="font-serif font-bold text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 p-2 rounded-md shadow-md z-0 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl max-w-lg">
            History in Brief
          </h2>
          <p className="w-full text-sm text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-700 bg-opacity-75 dark:bg-opacity-75 p-4 rounded-md shadow-md z-0 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl max-w-lg overflow-auto">
            {`Born in September 2002, I was so curious boy from the beginning not only about studying but also playing sports indoor as well as outdoor. I started studying at the age of 2.5 years having many dreams in my mind although I was also fond of travelling and fortunately I got to travel much and lived in many cities with my parents. Basically, I was introvert from the beginning and thus resulting less friedship and groups. Now, coming to the class 11th and 12th qualified many olympiad & exams like NSTSE and NAEST, not able to qualify JEE in first attempt due to circumstances to taking admission in SRM and then qualifying JEE results in getting admission in National Institutes of Technologies, Kurukshetra. So it was just a roller coaster having many steep ups and downs and that makes me what I am today, Sushant Kumar.`
              .split(" ")
              .map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-1 transition-transform duration-300 ease-in-out hover:scale-125"
                >
                  {word}
                </span>
              ))}
          </p>
        </section>
      </main>
      <footer className="bg-indigo-600 dark:bg-indigo-800 text-white dark:text-indigo-100 p-4 text-center mt-8">
        <p className="font-light text-sm text-black dark:text-white">
          © 2024 Sushant Kumar(Ssk) pvt ltd. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-black dark:text-white">
          Built by Ssk with<span className="text-red-400">❤️</span>.
        </p>
      </footer>
    </div>
  );
}

export default Home;