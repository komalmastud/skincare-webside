import React, { useState } from "react";
import "./faq.css"; // Import CSS for styling

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Where is Skinologyy located?",
      answer:
        "Skinologyy is located at Shimpoli Road, Borivali West. Please visit our contact page for detailed directions and clinic hours.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling us at +91 93724 35228, +91 91677 12123, emailing us at skinologyy2412@gmail.com, or using our online booking system.",
    },
    {
      question: "Who is Dr. Shweta S. Vichare?",
      answer:
        "Dr. Shweta S. Vichare is the lead practitioner at Skinology, holding qualifications in B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery) and F.A.M.C. (Fellowship in Aesthetic Medicine and Cosmetology). She specializes in dermatology and cosmetology, offering personalized care and advanced treatments to her patients.",
    },
    {
      question: "What makes us the best dermatologist in town?",
      answer:
        "We believe in personalized care. Every patient receives a customized treatment plan designed to meet their unique needs and goals. Dr. Vichare takes the time to understand each patient’s concerns and craft a plan that delivers the best results.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
