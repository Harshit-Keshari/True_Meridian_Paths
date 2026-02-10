import "./Introduction.css";
import islandImage from "../assets/island.png";

function Introduction() {
  return (
    <section className="introduction-section" id="introduction">
      <div className="intro-container">
        {/* Left: Image */}
        <div className="intro-image-wrapper">
          <img src={islandImage} alt="Island" className="intro-image" />
        </div>

        {/* Right: Text */}
        <div className="intro-text">
          <h2>INTRODUCTION</h2>
          <p className="intro-bullet">
            {/* <span className="bullet-dot"></span> */}
            <b>True Meridian Paths</b> is more than just a travel agency — it’s
            your companion in discovering meaningful journeys. We believe travel
            is not about ticking destinations off a list, but about experiences
            that stay with you long after the trip ends.
          </p>

          <p>
            From the spiritual ghats of Varanasi to carefully curated getaways
            across India, we design trips that match your purpose, pace, and
            personality. Whether you’re traveling solo, with family, friends, or
            as a group, our focus is on comfort, authenticity, and seamless
            planning.
          </p>

          <p>
            With personalized itineraries, trusted local experiences, and
            end-to-end travel support, True Meridian Paths ensures that every
            journey feels effortless, memorable, and truly yours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
