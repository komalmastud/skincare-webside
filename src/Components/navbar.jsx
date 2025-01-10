import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Make sure this file exists for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
          Blog
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
