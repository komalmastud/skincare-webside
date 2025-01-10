import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>At Skinologyy</h2>
          <p>
            We are dedicated to helping you achieve your skin and hair goals.
            Whether you’re interested in our advanced treatments, need more
            information, or want to book a consultation, we’re here to assist
            you.
          </p>
        </div>

        <div className="footer-services">
          <h2>Our Services</h2>
          <ul>
            <li>Dermatology</li>
            <li>Cosmetology</li>
            <li>Korean Skin Treatments</li>
            <li>Permanent Hair Removal</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Book Appointment</h2>
          <p>+91 93724 35228</p>
          <p>+91 91677 12123</p>
          <h2>Let’s Visit Us</h2>
          <p>
            Shop No. 2, Om Sundar Vichar CHS, Shimpoli Rd, opposite Bank of
            Baroda, Rayani Gram, Borivali West, Mumbai, Maharashtra 400092
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-direction"
          >
            Get Direction
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Skinologyy | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
