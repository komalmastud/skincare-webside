import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Slide1 from "../assets/beauty1.jpg";
import Slide2 from "../assets/beauty2.jpg";
import Slide3 from "../assets/beauty3.jpg";
import Slide4 from "../assets/beauty4.jpg";
import Slide5 from "../assets/beauty5.jpg";
import Popup from "../Components/popup"; // Ensure correct path
import "./swipper.css";
import { useState } from "react";

function Features() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupToggle = (e) => {
    e.preventDefault();
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="features-container">
      <Swiper
        className="swiper-container"
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        effect="fade"
      >
        {[Slide1, Slide2, Slide3, Slide4, Slide5].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="photos">
              <img src={slide} alt={`Beauty Slide ${index + 1}`} />
              <div className="overlay">
                <h1 className="overlay-title">
                  We Are Providing Best And Affordable Skin Care
                </h1>
                <p className="overlay-subtitle">
                  Discover the science of beautiful skin at{" "}
                  <strong>Skinologyy</strong>. Book your consultation with Dr.
                  Shweta Vichare today and take the first step towards a
                  rejuvenated, glowing complexion.
                </p>
                <div className="contact">
                  <button onClick={handlePopupToggle} className="contact-box">
                    <strong>Book An Appointment</strong>
                  </button>
                  <div className="phone-number">
                    <p>📞 +91 93724 35228</p>
                  </div>
                  <div className="phone-number">
                    <p>📞 +91 85911 47286</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isPopupOpen && (
        <Popup showModal={isPopupOpen} closeModal={handlePopupToggle} />
      )}
    </div>
  );
}

export default Features;
