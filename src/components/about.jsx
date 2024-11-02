import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import ProfilePic from "../assets/pic.jpg";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "This is all about me....",
    "I'm a passionate Software Developer.",
    "Welcome to my journey!",
  ];

  // Toggle theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <header className="flex items-center space-x-2 absolute top-4 right-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full transition duration-300"
        >
          {isDarkMode ? <FaSun size={24} /> : <LuMoonStar size={24} />}
        </button>
      </header>

      <div className="mt-8 mb-12 text-center">
        <h1
          className={`text-2xl font-bold transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentText]}
        </h1>
      </div>

      <section className="flex flex-col items-center mt-10 space-y-8">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl text-center space-y-4 p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-800 dark:text-gray-300">
            I was born in 2002, and my life has been shaped by a commitment to
            academic excellence, a passion for learning, and a wide range of
            interests. From an early age, I showed an enthusiasm for studies and
            quickly became known for my dedication as a student. Alongside
            academics, my love for singing led me to participate in numerous
            interschool competitions, where I was fortunate enough to win
            several prizes and build confidence in my abilities. One of my
            proudest accomplishments was cracking the National Anveshika Skill
            Test, a prestigious and challenging examination. Receiving an award
            from IIT Kanpur and Dr. H.C. Verma was an incredible honor and a
            defining moment, motivating me to continue pushing my limits. I also
            enjoyed success in other areas, such as securing the second position
            in the North Eastern Railway Division’s essay competition. This
            recognition further fueled my drive and helped me see the value of
            expressing ideas clearly and persuasively. In mathematics and
            science, I made significant strides, especially with my achievements
            in the Pre-Regional Mathematical Olympiad (PRMO) and the National
            Science Talent Search Examination (NSTSE), where I earned an All
            India Rank (AIR) of 729. These successes highlighted my analytical
            skills and solidified my love for problem-solving. However, my
            journey has not been without challenges. My first attempt at the
            Joint Entrance Examination (JEE) did not go as planned, and I faced
            setbacks that made it difficult to reach my goal. Despite the
            disappointment, I decided to take admission to SRM College in
            Ghaziabad, where I worked hard to maintain a CGPA of 9.2. I balanced
            my college studies with ongoing JEE preparation, knowing that I
            could improve and achieve what I had set out to do. My perseverance
            paid off, and I successfully cracked JEE on my second attempt,
            securing admission to the National Institute of Technology (NIT)
            Kurukshetra. This accomplishment was a turning point for me,
            affirming that resilience and determination are essential for
            success. Now, I am building a career as a software developer,
            equipped with skills in web and mobile development. I have developed
            a strong knowledge of both iOS and Android app development using
            Flutter, and I have delved into artificial intelligence and machine
            learning (AI/ML). My journey has led me to gain experience across
            various programming languages, including C, C++, Java, JavaScript,
            Python, C#, Dart, and HTML/CSS. Additionally, I am well-versed in
            the MERN tech stack and proficient in using frameworks and tools
            integral to modern software development. An unforgettable milestone
            in my journey was my internship at Woosong University in South
            Korea, where I worked on Optical Neural Networks. This experience
            not only expanded my technical knowledge but also exposed me to a
            diverse, international environment. I am also fluent in English and
            have acquired proficiency in German, which has allowed me to connect
            with people from different backgrounds. Each step of my journey has
            taught me the importance of persistence, adaptability, and the
            willingness to learn. With a foundation built on both triumphs and
            challenges, I am excited about the future and eager to continue
            growing as a software developer and innovator.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            I have experience with a wide range of technologies and tools,
            including the MERN stack (MongoDB, Express, React, Node.js), which I
            use extensively for building full-stack applications. In addition,
            I am proficient in Python, which has been essential in my work with
            AI/ML frameworks like TensorFlow and Keras, helping me dive into
            deep learning and data analysis. I’ve also gained hands-on
            experience with cloud platforms, particularly Azure, which I
            leverage for deploying scalable applications and managing cloud
            resources. My toolkit extends to DevOps practices, where I’m
            familiar with Docker for containerization and Git for version
            control. I frequently use CI/CD tools like GitHub Actions to
            streamline deployment workflows, ensuring consistent and reliable
            updates. In terms of front-end and mobile development, I work with
            Tailwind CSS for responsive styling, and I’m skilled in using
            Flutter for cross-platform mobile app development on both iOS and
            Android. For state management in web applications, I’ve worked with
            Redux and Zustand, and I’m comfortable building RESTful APIs as well
            as GraphQL for more efficient client-server communication. In
            addition to these, I have experience with other programming
            languages such as C, C++, Java, and C#, and I use tools like VS
            Code, Postman, and MongoDB Compass to optimize my development
            process.
          </p>
        </div>

        <div className="max-w-xl text-center space-y-4 p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="text-gray-800 dark:text-gray-300">
            <strong>Languages:</strong>  Java, Python, C/C++, HTML/CSS, C#, JavaScript, dart, hdl.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            <strong>Frameworks:</strong>  Django, Express.js, Reactjs, Node.js, MongoDB, jupyter, OpenCV, Flask, Bootstrap, Streamlit,
            PineconeDB.
          </p>
          <p className="text-gray-800 dark:text-gray-300">
            <strong>Tools:</strong>  TensorFlow,sklearn, PyTorch, OpenAI, SpeechRecognition, Pandas, Matplotlib, Pygame,
VS Code, Unity, GIMP, Balsamiq, Botpress, Android Studio, Postman, Git, Google Cloud Platforms, MATLAB,
AutoCAD, MySQL, pgAdmin4,tailwind css, threejs,Azure,Huggingface API,Google Colab.

          </p>
        </div>
      </section>
    </div>
  );
}

export default About;