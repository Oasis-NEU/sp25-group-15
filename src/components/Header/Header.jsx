// src/components/Header.js
import React from 'react';
import './Header.css'; // We'll write some CSS here

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        Protein Pals
      </div>
      <nav className="header-nav">
        <a href="#compare">Compare</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  );
}

export default Header;
