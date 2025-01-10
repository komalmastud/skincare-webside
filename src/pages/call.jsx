import React, { useState } from "react";
import "./call.css"; // Import your CSS file

const Call = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, alert, etc.)
    alert("Your request has been submitted!");
    console.log(formData); // Log form data or send it to an API
  };

  return (
    <div className="call-container">
      <h1>Get A Call Back</h1>
      <form onSubmit={handleSubmit} className="call-form">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Number*</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
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

        <label htmlFor="service">Select Service*</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Dermatology">Dermatology</option>
          <option value="Cosmetology">Cosmetology</option>
          <option value="Korean Skin Treatment">Korean Skin Treatment</option>
          <option value="Permanent Hair Removal">Permanent Hair Removal</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Call;
