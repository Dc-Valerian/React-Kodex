import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Heropage from "./Pages/HomePage/Heropage";
import Service from "./Pages/Service/Service";
import Error from "./Pages/ErrorPage/Error";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
