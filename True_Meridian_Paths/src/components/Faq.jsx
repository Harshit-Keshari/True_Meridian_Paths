import "./Faq.css";

function Faq() {
  return (
    <section className="faq-section">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div className="faq-list">
        <details>
          <summary>Do you provide customized trips?</summary>
          <p>Yes, every journey is planned based on your preferences.</p>
        </details>

        <details>
          <summary>Can solo travelers book with you?</summary>
          <p>Absolutely. We design safe and meaningful solo trips.</p>
        </details>

        <details>
          <summary>Are your packages budget-friendly?</summary>
          <p>We offer flexible options across different budgets.</p>
        </details>

        <details>
          <summary>Do you handle stays and local travel?</summary>
          <p>Yes, we manage stays, transport, and local experiences.</p>
        </details>
      </div>
    </section>
  );
}

export default Faq;
