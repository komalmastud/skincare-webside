import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar"; // Import your Navbar component

// Import the content components for the routes
import HomePage from "./pages/HomePage"; // Corrected import
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
