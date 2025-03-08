// src/components/FAQ.js
import React from 'react';
import './FAQ.css';

function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>How is nutritional efficiency calculated?</h3>
        <p>
          We combine price, protein, and calorie data to give you a quick 
          comparison. Our method is explained in detail in our comparison section.
        </p>
      </div>
      <div className="faq-item">
        <h3>How often is the product data updated?</h3>
        <p>
          We update our data regularly to ensure accuracy. You can always see the 
          most recent prices and nutritional information on the Compare page.
        </p>
      </div>
      {/* Add more FAQs as needed */}
    </section>
  );
}

export default FAQ;
