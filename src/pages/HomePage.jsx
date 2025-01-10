import Card from "./cards";
import Call from "./call";
import Faq from "./faq";
import Footer from "./footer";
const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Skinologyy</h1>
        <p>
          Welcome to Skinology, your premier destination for advanced skincare
          and dermatological solutions. At Skinology, we are dedicated to
          enhancing your natural beauty through personalized, science-based
          treatments. Under the expert guidance of Dr. Shweta S. Vichare,
          B.A.M.S. & F.A.M.C., our clinic offers a holistic approach to skincare
          that caters to your unique needs and concerns.
        </p>
      </header>

      <section>
        <h2>Meet Dr. Shweta S. Vichare</h2>
        <p>
          Dr. Shweta S. Vichare is a Leading Cosmetologist, Dermatologist, and
          Aesthetician in Borivali, Mumbai.
        </p>
        <p>
          Dr. Shweta S. Vichare is a distinguished dermatologist with extensive
          training and experience in both medical and aesthetic dermatology.
          Holding degrees in Bachelor of Ayurvedic Medicine and Surgery
          (B.A.M.S.) and Fellowship in Aesthetic Medicine and Cosmetology
          (F.A.M.C.) from Singapore and Australia, Dr. Vichare combines
          traditional wisdom with modern science to deliver comprehensive
          skincare solutions.
        </p>
      </section>

      <section>
        <h2>We Understand Your Skin</h2>
        <ul>
          <li>12+ Years Experienced</li>
          <li>Advanced Technology</li>
          <li>Rapid Emergency Treatments</li>
          <li>Highest Standard of Care</li>
        </ul>
      </section>
      <Card />
      <Call />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
