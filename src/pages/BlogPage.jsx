import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import "./blog.css";
import BlogImage from "../assets/blog.jpg"; // Your blog image

const OneCard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handler for the button click
  const handleLearnMoreClick = () => {
    navigate("/blogcard"); // Navigate to the BlogCard page
  };

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
          At <strong>Skinologyy</strong>, we provide personalized skin care.
        </p>
        <button className="one-card-button" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OneCard;
