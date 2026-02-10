import "./WhyChooseUs.css";
import whyImage from "../assets/whychooseus.png";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Image */}
        <div className="why-image-wrapper">
          <img src={whyImage} alt="Why Choose Us" />
        </div>

        {/* Right Content */}
        <div className="why-content">
          <h2>WHY CHOOSE US?</h2>

          <ul className="why-points">
            <li>Personalized travel planning for every journey</li>
            <li>24/7 support throughout your trip</li>
            <li>Carefully curated destinations and experiences</li>
          </ul>

          <p className="why-desc">
            At True Meridian Paths, we prioritize trust, comfort, and meaningful
            experiences. From the moment you plan your journey to the time you
            return home, our team ensures seamless coordination, local
            expertise, and personalized care at every step.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
