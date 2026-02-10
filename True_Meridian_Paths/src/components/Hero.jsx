import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          TRUE MERIDIAN <br /> PATHS
        </h1>

        <p>Explore the World with us !</p>

        <a href="#introduction" className="hero-btn">
          MORE INFORMATION
        </a>
      </div>
    </div>
  );
}

export default Hero;
