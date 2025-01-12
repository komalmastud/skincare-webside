import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

// Import images from the assets folder
import dermatologyImage from "../assets/card.jpg";
import cosmetologyImage from "../assets/card1.jpg";
import koreanSkinImage from "../assets/card2.jpg";
import hairRemovalImage from "../assets/card4.jpg";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Skinologyy</h1>
      <p>
        Your premier destination for advanced skincare and dermatological
        solutions.
      </p>

      <div className="card-container">
        <div className="card">
          <img src={dermatologyImage} alt="Dermatology" />
          <h2>Dermatology</h2>
          <p>
            Explore the best dermatological treatments for healthy, glowing
            skin.
          </p>
          <Link to="/dermatology">
            <button>Read More</button>
          </Link>
        </div>

        {/* Cosmetology Card */}
        <div className="card">
          <img src={cosmetologyImage} alt="Cosmetology" />
          <h2>Cosmetology</h2>
          <p>Enhance your beauty with the latest in cosmetic treatments.</p>
          <Link to="/cosmetology">
            <button>Read More</button>
          </Link>
        </div>

        {/* Korean Skin Treatment Card */}
        <div className="card">
          <img src={koreanSkinImage} alt="Korean Skin Treatment" />
          <h2>Korean Skin Treatment</h2>
          <p>
            Experience advanced Korean skincare treatments for radiant skin.
          </p>
          <Link to="/korean-skin-treatment">
            <button>Read More</button>
          </Link>
        </div>

        {/* Permanent Hair Removal Card */}
        <div className="card">
          <img src={hairRemovalImage} alt="Permanent Hair Removal" />
          <h2>Permanent Hair Removal</h2>
          <p>
            Say goodbye to unwanted hair with advanced hair removal treatments.
          </p>
          <Link to="/permanent-hair-removal">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
