import "./ReadyToPlan.css";

function ReadyToPlan() {
  return (
    <section className="ready-section" id="ready-to-plan">
      <h2>ALREADY HAVE A PLAN ?</h2>
      <p className="ready-subtext">
        Share your details and we’ll reach out to craft a journey just for you.
      </p>

      <form
        className="ready-form"
        action="https://script.google.com/macros/s/AKfycbzRqpP8Svq8ZQ7DJnNTVdWvFnbCGIu9WyPHbvzXAKA2Zj1UAgkyy5KIPeVNJAg_gusxMg/exec"
        method="GET"
      >
        <input type="hidden" name="type" value="lead" />

        <input type="text" name="name" placeholder="Your Name" required />

        <input type="tel" name="phone" placeholder="WhatsApp Number" required />

        <input type="email" name="email" placeholder="Email (optional)" />

        <textarea
          name="message"
          placeholder="Tell us about your travel plan"
          rows="4"
          required
        ></textarea>

        <button type="submit">REQUEST A CALLBACK</button>
      </form>
    </section>
  );
}

export default ReadyToPlan;
