import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import FAQ from './components/FAQ/FAQ';
import CompareSection from './components/CompareSection/CompareSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <CompareSection />
      <FAQ />
    </div>
  );
}

export default App;
