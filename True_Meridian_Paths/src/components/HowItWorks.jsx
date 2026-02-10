import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section">
      <h2>HOW IT WORKS</h2>

      <div className="how-steps">
        <div className="how-card">
          <span>01</span>
          <h4>Share Your Plan</h4>
          <p>Tell us where, when, and how you want to travel.</p>
        </div>

        <div className="how-card">
          <span>02</span>
          <h4>We Design Your Journey</h4>
          <p>We curate a personalized itinerary just for you.</p>
        </div>

        <div className="how-card">
          <span>03</span>
          <h4>Confirm & Relax</h4>
          <p>You approve the plan, we handle the details.</p>
        </div>

        <div className="how-card">
          <span>04</span>
          <h4>Travel Stress-Free</h4>
          <p>Enjoy a smooth, meaningful travel experience.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
