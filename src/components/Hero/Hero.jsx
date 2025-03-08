// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <h1>Find Your Perfect Protein Match</h1>
      <p>
        Compare protein products side by side to discover the best
        value for your fitness and budget goals.
      </p>
      <button className="hero-button">Start Comparing</button>
    </section>
  );
}

export default Hero;
