// src/components/Mission.js
import React from 'react';
import './Mission.css';
import watchImage from '../assets/watch.jpg'; // Example import

function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-image">
        <img src={watchImage} alt="Watch" />
      </div>
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
          We compare real data so you can make the best decisions for your health. 
          Our site tracks protein products, their prices, calories, and more, so 
          you can find the perfect product for your goals.
        </p>
      </div>
    </section>
  );
}

export default Mission;
