import "./aboutUs.css";
import about1 from "../assets/aboutpage1.jpg";
import about2 from "../assets/aboutpage2.jpg";
import Footer from "../pages/footer";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Skinologyy Clinic</h1>
      <p>
        Welcome to Skinologyy, your premier destination for advanced skincare
        and dermatological solutions. At Skinologyy, we are dedicated to
        enhancing your natural beauty through personalized, science-based
        treatments. Under the expert guidance of Dr. Shweta S. Vichare, B.A.M.S.
        & F.A.M.C., our clinic offers a holistic approach to skincare that
        caters to your unique needs and concerns.
      </p>

      <h2>Why Patients Choose Our Center</h2>
      <p>
        With extensive training and experience, Dr. Vichare combines traditional
        Ayurvedic principles with modern dermatological science. Her credentials
        and continuous commitment to education ensure that you receive the best
        possible care. At Skinologyy, we are dedicated to providing the highest
        level of dermatological care and aesthetic treatments. Here’s why you
        should choose us for your skincare needs:
      </p>

      <ul className="reasons-list">
        <li>12+ Years Experienced</li>
        <li>Advanced Technology</li>
        <li>Rapid Emergency Treatments</li>
        <li>Highest Standard of Care</li>
        <li>Personalized Care</li>
        <li>Advanced Technology</li>
      </ul>

      {/* First section with image on the right side */}
      <div className="about-us-section">
        <div className="about-us-text">
          <p>
            Your comfort and satisfaction are our top priorities. We strive to
            create a welcoming and supportive environment where you can feel
            confident and relaxed throughout your skincare journey.
          </p>
          <p>
            Discover the difference that expert care and personalized attention
            can make. Choose Skinology for a radiant, healthy complexion and a
            skincare partner you can trust. Book your consultation with Dr.
            Shweta S. Vichare today and embark on your journey to beautiful
            skin.
          </p>
        </div>
        <div className="about-us-image">
          <img src={about1} alt="Skinologyy Clinic" />
        </div>
      </div>

      {/* Second section with image on the left side */}
      <div className="about-us-section">
        <div className="about-us-image">
          <img src={about2} alt="Skinologyy Clinic" />
        </div>
        <div className="about-us-text">
          <h3>Our Services</h3>
          <ul>
            <li>Medical Facial for Radiant and Glowing Skin</li>
            <li>Hair PRP for Hair Growth</li>
            <li>Laser Treatment to Get Rid of Hair Permanently</li>
            <li>Meso Hair Treatment for Hair Growth</li>
            <li>EMS and Meso for Inch Loss</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
