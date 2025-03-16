import { useState, useEffect, useRef } from "react";


const PriceDropdown = () => {
 const [isOpen, setIsOpen] = useState(false);
 const dropdownRef = useRef(null);


 const toggleDropdown = () => {
   setIsOpen(!isOpen);
 };


 useEffect(() => {
   const handleClickOutside = (event) => {
     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   };


   document.addEventListener("click", handleClickOutside);
   return () => {
     document.removeEventListener("click", handleClickOutside);
   };
 }, []);


 return (
   <div className="dropdown" ref={dropdownRef}>
     <button onClick={toggleDropdown} className="dropbtn">
     Select Option
     </button>
     <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
       <a href="#">Low to High</a>
       <a href="#">High to Low</a>
     </div>
   </div>
 );
};


export default PriceDropdown;


