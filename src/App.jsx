import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  // Function to toggle the first dropdown
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  // Function to toggle the second dropdown
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setIsOpen1(false);
      }
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setIsOpen2(false);
      }
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <h1>Protein Pow</h1>

      {/* First Dropdown */}
      <div className="dropdown" ref={dropdownRef1}>
        <button onClick={toggleDropdown1} className="dropbtn">price</button>
        <div className={`dropdown-content ${isOpen1 ? 'show' : ''}`}>
          <a href="#">low to high</a>
          <a href="#">high to low</a>
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="dropdown" ref={dropdownRef2}>
        <button onClick={toggleDropdown2} className="dropbtn2">protein</button>
        <div className={`dropdown-content2 ${isOpen2 ? 'show2' : ''}`}>
          <a href="#">low to high</a>
          <a href="#">high to low</a>
        </div>
      </div>
    </>
  );
}

export default App;