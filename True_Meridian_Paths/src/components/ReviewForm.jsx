import "./ReviewForm.css";

function ReviewForm() {
  return (
    <section className="review-form-section" id="review">
      <h2>Share Your Experience</h2>

      <form
        className="review-form"
        action="https://script.google.com/macros/s/AKfycbzRqpP8Svq8ZQ7DJnNTVdWvFnbCGIu9WyPHbvzXAKA2Zj1UAgkyy5KIPeVNJAg_gusxMg/exec"
        method="GET"
      >
        <input type="hidden" name="type" value="review" />

        <input type="text" name="name" placeholder="Your Name" required />

        <textarea
          name="review"
          placeholder="Your experience with us"
          rows="4"
          required
        ></textarea>

        <input
          type="text"
          name="instagram"
          placeholder="Instagram ID (optional)"
        />

        <input
          type="url"
          name="reel"
          placeholder="Instagram video link (optional)"
        />

        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
}

export default ReviewForm;
