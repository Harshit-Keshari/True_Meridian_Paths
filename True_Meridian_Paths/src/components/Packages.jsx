import "./Packages.css";

function Packages() {
  const whatsappNumber = "918005454034"; // replace with your number
  const message = "Hi, I’m interested in your travel packages. Please share details.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="packages-section">
      <h2 className="packages-title">OUR PACKAGES</h2>

      <div className="packages-container">

        {/* Basic */}
        <div className="package-card">
          <h3>FAMILY PACKAGES</h3>

          <ul>
            <li>Thoughtfully planned itineraries</li>
            <li>Essential travel assistance</li>
            <li>Comfort-focused experiences</li>
          </ul>

          <p className="coming-soon">Packages to be announced</p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="whatsapp-btn">ENQUIRE ON WHATSAPP</button>
          </a>
        </div>

        {/* VIP */}
        <div className="package-card highlighted">
          <h3>TREK PACKAGES</h3>

          <ul>
            <li>Personalized trip planning</li>
            <li>Priority support</li>
            <li>Curated premium experiences</li>
          </ul>

          <p className="coming-soon">Packages to be announced</p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="whatsapp-btn">ENQUIRE ON WHATSAPP</button>
          </a>
        </div>

        {/* VVIP */}
        <div className="package-card">
          <h3>SOLO PACKAGES</h3>

          <ul>
            <li>Fully customized journeys</li>
            <li>Dedicated travel assistance</li>
            <li>Exclusive destination experiences</li>
          </ul>

          <p className="coming-soon">Packages to be announced</p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button className="whatsapp-btn">ENQUIRE ON WHATSAPP</button>
          </a>
        </div>

      </div>

      {/* CTA */}
      <div className="packages-cta">
        <h3>Planning a trip already?</h3>
        <p>
          Tell us your destination, dates, and preferences — we’ll help you
          craft a journey that suits you perfectly.
        </p>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <button className="cta-btn">PLAN MY JOURNEY</button>
        </a>
      </div>

    </section>
  );
}

export default Packages;
