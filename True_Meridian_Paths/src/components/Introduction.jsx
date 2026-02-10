import "./Introduction.css";

function Introduction() {
  return (
    <section className="introduction-section" id="introduction">
      <div className="intro-container">
        {/* Left: Image */}
        <div className="intro-image-wrapper">
          <img src="/island.png" alt="Island" className="intro-image" />
        </div>

        {/* Right: Text */}
        <div className="intro-text">
          <h2>INTRODUCTION</h2>

          <p className="intro-bullet">
            <b>True Meridian Paths</b> is more than just a travel agency — it’s
            your companion in discovering meaningful journeys.
          </p>

          <p>
            From the spiritual ghats of Varanasi to carefully curated getaways
            across India, we design trips that match your purpose, pace, and
            personality.
          </p>

          <p>
            With personalized itineraries, trusted local experiences, and
            end-to-end travel support, every journey feels effortless and truly
            yours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
