import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ContactUs from "../pages/ContactPage";
import Slide1 from "../assets/beauty1.jpg";
import Slide2 from "../assets/beauty2.jpg";
import Slide3 from "../assets/beauty3.jpg";
import Slide4 from "../assets/beauty4.jpg";
import Slide5 from "../assets/beauty5.jpg";
import { Link } from "react-router-dom";
import "./swipper.css";

function Features() {
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
                  <Link to="/contact" className="contact-box">
                    <p>
                      <strong>Book An Appointment</strong>
                    </p>
                    <ContactUs />
                  </Link>
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
    </div>
  );
}

export default Features;