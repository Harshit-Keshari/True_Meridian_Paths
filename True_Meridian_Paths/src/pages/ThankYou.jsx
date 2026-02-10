import Navigation_bar from "../components/Navigation_bar";
import "./ThankYou.css";

function ThankYou() {
  return (
    <>
      <Navigation_bar />

      <section className="thankyou-section">
        <h1>THANK YOU ✨</h1>

        <p className="thankyou-text">
          Your submission has been received successfully.
          <br />
          We truly appreciate you taking the time to connect with us.
        </p>

        <p className="thankyou-subtext">
          Our team will reach out to you shortly.
        </p>

        <a href="/" className="thankyou-btn">
          Back to Home
        </a>
      </section>
    </>
  );
}

export default ThankYou;
