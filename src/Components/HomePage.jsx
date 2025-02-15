import Swiper from "../Components/swipper";
import Card from "./cards";
import HomeService from "../pages/homeservice";
import Call from "../pages/call";
import Faq from "../pages/faq";
import Footer from "../pages/footer";
import Popup from "../Components/popup";
import Dr from "../assets/dr.jpg";
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      <Swiper />
      <div className="home-page">
        <section className="meet-doctor-section">
          <div className="doctor-image-container">
            <img
              src={Dr} // Use the imported variable here
              alt="Dr. Shweta S. Vichare"
              className="doctor-image"
            />
          </div>
          <div className="doctor-content">
            <header>
              <h1>Welcome to Skinologyy</h1>
              <p>
                Welcome to Skinology, your premier destination for advanced
                skincare and dermatological solutions. At Skinology, we are
                dedicated to enhancing your natural beauty through personalized,
                science-based treatments.
              </p>
            </header>
            <h2>Meet Dr. Shweta S. Vichare</h2>
            <p>
              Dr. Shweta S. Vichare is a Leading Cosmetologist, Dermatologist,
              and Aesthetician in Borivali, Mumbai.
            </p>
            <p>
              Dr. Shweta S. Vichare is a distinguished dermatologist with
              extensive training and experience in both medical and aesthetic
              dermatology. Holding degrees in Bachelor of Ayurvedic Medicine and
              Surgery (B.A.M.S.) and Fellowship in Aesthetic Medicine and
              Cosmetology (F.A.M.C.) from Singapore and Australia, Dr. Vichare
              combines traditional wisdom with modern science to deliver
              comprehensive skincare solutions.
            </p>
            <h2>We Understand Your Skin</h2>
            <ul>
              <li>12+ Years Experienced</li>
              <li>Advanced Technology</li>
              <li>Rapid Emergency Treatments</li>
              <li>Highest Standard of Care</li>
            </ul>
          </div>
        </section>

        <section></section>

        <Card />
        <HomeService />
        <Call />
        <Faq />
        <Popup />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
