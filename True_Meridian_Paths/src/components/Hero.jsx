import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">

      <div className="hero-video-wrapper">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/nmP64V1R16s?autoplay=1&mute=1&loop=1&playlist=nmP64V1R16s&controls=0&modestbranding=1&rel=0"
          title="True Meridian Paths Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

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
