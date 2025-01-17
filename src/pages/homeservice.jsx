import React from "react";
import { useNavigate } from "react-router-dom";
import "./homeservice.css";

import ultrasonicImage from "../assets/ulltrasonic.jpg";
import highFrequencyImage from "../assets/highfrequency.jpg";
import galvanicImage from "../assets/galvanic.jpg";
import microdermabrasionImage from "../assets/microdermabrasion.jpg";

const HomeServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Ultrasonic",
      image: ultrasonicImage,
      description:
        "Ultrasonic treatment uses sound waves to deeply cleanse and rejuvenate your skin.",
    },
    {
      name: "High Frequency",
      image: highFrequencyImage,
      description:
        "High frequency technology helps treat acne, reduce puffiness, and stimulate collagen.",
    },
    {
      name: "Galvanic",
      image: galvanicImage,
      description:
        "Galvanic treatment uses electric currents to enhance skin absorption and promote hydration.",
    },
    {
      name: "Microdermabrasion",
      image: microdermabrasionImage,
      description:
        "Microdermabrasion exfoliates the skin, removing dead cells for a smoother, youthful appearance.",
    },
  ];

  return (
    <div className="home-services-section">
      <h1>Our Top Services</h1>
      <p>Discover our most popular services for glowing and healthy skin.</p>

      <div className="home-services-container">
        {services.map((service, index) => (
          <div className="home-service-card" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="home-service-image"
            />
            <div className="home-service-content">
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="see-all-services-btn"
        onClick={() => navigate("/services")}
      >
        See All Services
      </button>
    </div>
  );
};

export default HomeServices;
