import React from "react";
import "./blogcard.css";

// Import images
import BlogImage from "../assets/blog.jpg";
import BlogImage2 from "../assets/blog2.jpg";

const SkinCareCard = () => {
  return (
    <div className="skincare-card-container">
      {/* Left Side Image */}
      <div className="skincare-card-image">
        <img src={BlogImage} alt="Skin Care Treatment" />
      </div>

      {/* Right Side Content */}
      <div className="skincare-card-content">
        <div className="skincare-card-image">
          <img src={BlogImage2} alt="Skin Care Treatment" />
        </div>
        <h2 className="skincare-card-title">Treat Yourself to Radiant Skin</h2>
        <p>
          When it comes to achieving radiant, healthy skin, the journey can be
          as important as the destination. At <strong>Skinologyy</strong>, we
          understand that each person’s skin is unique, requiring personalized
          care and attention. Our range of unbeatable skin care treatments is
          designed to address various skin concerns, rejuvenate your complexion,
          and give you the glowing skin you deserve.
        </p>
        <h3>Why Skin Care Matters</h3>
        <p>
          Your skin is the largest organ of your body and plays a crucial role
          in protecting you from external factors. Keeping it healthy is
          essential for both your appearance and overall well-being. Skin care
          treatments not only help in maintaining the health of your skin but
          also in treating specific issues such as acne, pigmentation, aging,
          and dehydration.
        </p>
        <h3>Our Unbeatable Skin Care Treatments</h3>
        <p>
          At <strong>Skinologyy</strong>, we offer a comprehensive range of skin
          care treatments tailored to meet your individual needs.
        </p>
      </div>
    </div>
  );
};

export default SkinCareCard;
