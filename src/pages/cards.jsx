import "./cards.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Skinologyy</h1>
      <p>
        Your premier destination for advanced skincare and dermatological
        solutions.
      </p>

      <div className="card-container">
        {/* Dermatology Card */}
        <div className="card">
          <img src="path_to_dermatology_image.jpg" alt="Dermatology" />
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
          <img src="path_to_cosmetology_image.jpg" alt="Cosmetology" />
          <h2>Cosmetology</h2>
          <p>Enhance your beauty with the latest in cosmetic treatments.</p>
          <Link to="/cosmetology">
            <button>Read More</button>
          </Link>
        </div>

        {/* Korean Skin Treatment Card */}
        <div className="card">
          <img
            src="path_to_korean_skin_treatment_image.jpg"
            alt="Korean Skin Treatment"
          />
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
          <img
            src="path_to_permanent_hair_removal_image.jpg"
            alt="Permanent Hair Removal"
          />
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
