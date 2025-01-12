import React from "react";
import "./services.css";
import Footer from "../pages/footer";

// Import images for services (replace with actual image paths)
import ultrasonicImage from "../assets/ulltrasonic.jpg";
import highFrequencyImage from "../assets/highfrequency.jpg";
import galvanicImage from "../assets/galvanic.jpg";
import microdermabrasionImage from "../assets/microdermabrasion.jpg";
import hairFallImage from "../assets/hairfalldrandruff.jpg";
import rfImage from "../assets/rf.jpg";
import ledTherapyImage from "../assets/led.jpg";
import ccGlowImage from "../assets/ccglow.jpg";
import hydrafacialImage from "../assets/hydrafacial.jpg";
import iplHairRemovalImage from "../assets/hairremoval.jpg";
import moleWartRemovalImage from "../assets/moleremoval.jpg";
import hollywoodFacialImage from "../assets/carbon.jpg";
import bbGlowImage from "../assets/bbglow.jpg";
import oxygeneoFacialImage from "../assets/oxygeneo.jpg";
import chemicalPeelImage from "../assets/chemicalpeel.jpg";
import photoFacialImage from "../assets/photofacial.jpg";

const ServicesPage = () => {
  const services = [
    {
      name: "Ultrasonic",
      image: ultrasonicImage,
      description:
        "Ultrasonic treatment uses sound waves to deeply cleanse and rejuvenate your skin.",
    },
    {
      name: "High Frequency",
      image: highFrequencyImage,
      description:
        "High frequency technology helps treat acne, reduce puffiness, and stimulate collagen.",
    },
    {
      name: "Galvanic",
      image: galvanicImage,
      description:
        "Galvanic treatment uses electric currents to enhance skin absorption and promote hydration.",
    },
    {
      name: "Microdermabrasion",
      image: microdermabrasionImage,
      description:
        "Microdermabrasion exfoliates the skin, removing dead cells for a smoother, youthful appearance.",
    },
    {
      name: "Hair Fall / Anti-Dandruff",
      image: hairFallImage,
      description:
        "Treats hair fall and dandruff with advanced solutions to promote healthy hair growth.",
    },
    {
      name: "RF (Radio Frequency)",
      image: rfImage,
      description:
        "RF technology helps tighten skin, reduce wrinkles, and improve skin texture.",
    },
    {
      name: "LED Therapy",
      image: ledTherapyImage,
      description:
        "LED Therapy uses light to treat acne, improve skin tone, and reduce signs of aging.",
    },
    {
      name: "CC Glow",
      image: ccGlowImage,
      description:
        "CC Glow treatment gives your skin a glowing, smooth finish with added benefits of skin healing.",
    },
    {
      name: "Hydrafacial",
      image: hydrafacialImage,
      description:
        "Hydrafacial cleanses, exfoliates, and hydrates your skin for a fresh, youthful glow.",
    },
    {
      name: "IPL Laser Hair Removal",
      image: iplHairRemovalImage,
      description:
        "IPL technology provides long-lasting hair removal by targeting the hair follicles with light.",
    },
    {
      name: "Mole & Wart Removal",
      image: moleWartRemovalImage,
      description:
        "Safe and effective treatments for mole and wart removal to improve skin appearance.",
    },
    {
      name: "Carbon / Hollywood Facial",
      image: hollywoodFacialImage,
      description:
        "A Hollywood Facial with carbon helps clear pores, improve skin texture, and brighten your skin.",
    },
    {
      name: "BB Glow / Derma Roller",
      image: bbGlowImage,
      description:
        "BB Glow treatment enhances skin tone and texture with the use of serums and microneedling.",
    },
    {
      name: "Oxygeneo Facial",
      image: oxygeneoFacialImage,
      description:
        "Oxygeneo Facial rejuvenates skin with oxygenating treatments for a refreshed and glowing look.",
    },
    {
      name: "Chemical Peel",
      image: chemicalPeelImage,
      description:
        "A chemical peel removes dead skin cells and stimulates skin regeneration for a youthful glow.",
    },
    {
      name: "Photo Facial",
      image: photoFacialImage,
      description:
        "A Photo Facial targets pigmentation, acne, and fine lines to restore even skin tone.",
    },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <p>
        Explore a wide range of advanced skincare treatments offered at
        Skinologyy.
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />
            <div className="service-content">
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
