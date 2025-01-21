import React from "react";
import "./blogcard.css";

// Import images
import BeautyImage1 from "../assets/blog.jpg";
import BeautyImage2 from "../assets/blog2.jpg";

const BeautyCard = () => {
  return (
    <div className="beauty-card-container">
      <div className="beauty-card-top-image">
        <img src={BeautyImage1} alt="Beauty Treatment" />
      </div>

      <div className="beauty-card-bottom">
        <div className="beauty-card-images">
          <div className="beauty-card-image">
            <img src={BeautyImage2} alt="Beauty Treatment 2" />
          </div>
        </div>

        <div className="beauty-card-content">
          <h2 className="beauty-card-title">Treat Yourself to Radiant Skin</h2>
          <p>
            When it comes to achieving radiant, healthy skin, the journey can be
            as important as the destination. At <strong>Beautyology</strong>, we
            understand that each person’s skin is unique, requiring personalized
            care and attention. Our range of unbeatable skin care treatments is
            designed to address various skin concerns, rejuvenate your
            complexion, and give you the glowing skin you deserve.
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
            At <strong>Beautyology</strong>, we offer a comprehensive range of
            skin care treatments tailored to meet your individual needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeautyCard;
