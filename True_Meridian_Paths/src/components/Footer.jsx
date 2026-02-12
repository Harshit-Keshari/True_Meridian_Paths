import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <h3>True Meridian Paths</h3>
      <p>Journeys crafted with purpose & care.</p>

      <div className="footer-links">
        <a href="https://wa.me/918005454034">WhatsApp</a>
        <a href="https://www.instagram.com/truemeridianpaths/">Instagram</a>
        <a href="mailto:info@truemeridianpaths.com">Email</a>
      </div>

      <span>© {new Date().getFullYear()} True Meridian Paths</span>
    </footer>
  );
}

export default Footer;
