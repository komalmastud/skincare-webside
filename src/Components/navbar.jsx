import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // hamburger icon
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          HOME
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          ABOUT
        </Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>
          SERVICES
        </Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
          BlOG
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          CONTACT
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
