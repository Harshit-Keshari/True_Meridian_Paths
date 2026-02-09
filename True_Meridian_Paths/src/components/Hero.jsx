import "./Hero.css";
import heroVideo from "../assets/herovideo.mp4";

function Hero() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          TRUE MERIDIAN <br /> PATHS
        </h1>

        <p>Explore the World with us !</p>

        <button className="hero-btn">MORE INFORMATION</button>
      </div>
    </div>
  );
}

export default Hero;
