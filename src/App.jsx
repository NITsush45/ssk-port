import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import About from "./components/about";
import Blog from "./components/blog";
import ContactUs from "./components/contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;