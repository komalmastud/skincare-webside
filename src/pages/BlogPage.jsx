import React from "react";
import "./blog.css";

// Import images
import BlogImage from "../assets/blog.jpg";

const OneCard = () => {
  return (
    <div className="one-card">
      {/* Card Image */}
      <div className="one-card-image">
        <img src={BlogImage} alt="Radiant Skin" />
      </div>

      {/* Card Content */}
      <div className="one-card-content">
        <h5 className="one-card-title">Treat Yourself to Radiant Skin</h5>
        <p className="one-card-description">
          At <strong>Skinologyy</strong>, we provide personalized
        </p>
        <button className="one-card-button">Learn More</button>
      </div>
    </div>
  );
};

export default OneCard;
