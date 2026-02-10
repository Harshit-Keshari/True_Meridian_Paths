import "./Services.css";
import servicesImage from "../assets/Services.png";

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* Left Content */}
        <div className="services-text">
          <h2>OUR SERVICES</h2>

          <p className="services-desc">
            At True Meridian Paths, we craft journeys that are seamless,
            soulful, and memorable. From planning to execution, we take care
            of every detail so you can focus on the experience.
          </p>

          <ul className="services-list">
            <li>Flight Bookings</li>
            <li>Hotel Reservations</li>
            <li>Travel Packages</li>
            <li>Guided Tours</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="services-image-wrapper">
          <img src={servicesImage} alt="Travel Destination" />
        </div>

      </div>
    </section>
  );
}

export default Services;
