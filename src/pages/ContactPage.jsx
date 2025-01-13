import React, { useState } from "react";
import "./contactUs.css";
import Footer from "../pages/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Have questions? Get in touch!</p>

      {/* Contact Info Boxes */}
      <div className="contact-info">
        <div className="contact-box1">
          <h3>Open Hours</h3>
          <p>Mon - Sun: 11:00 AM - 10:30 PM</p>
        </div>
        <div className="contact-box1">
          <h3>Address</h3>
          <p>
            Shop No. 2, Om Sundar Vichar CHS, Shimpoli Rd, opposite Bank of
            Baroda, Rayani Gram, Borivali West, Mumbai, Maharashtra 400092
          </p>
        </div>
        <div className="contact-box1">
          <h3>Reach Us</h3>
          <p>+91 93724 35228</p>
          <p>+91 91677 12123</p>
          <p>skinologyy2412@gmail.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
};

export default ContactUs;
