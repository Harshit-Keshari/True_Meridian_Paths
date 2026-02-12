import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.png"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

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
