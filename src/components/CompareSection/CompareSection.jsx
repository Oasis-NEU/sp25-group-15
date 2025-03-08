// src/components/CompareSection.js
import React, { useState } from 'react';
import './CompareSection.css';

function CompareSection() {
  // Example data
  const [products, setProducts] = useState([
    { id: 1, name: 'Whey Protein', price: 25, calories: 120, protein: 24 },
    { id: 2, name: 'Casein Protein', price: 30, calories: 110, protein: 26 },
    { id: 3, name: 'Vegan Blend', price: 20, calories: 130, protein: 22 },
  ]);

  const [sortKey, setSortKey] = useState('');

  const handleSort = (key) => {
    setSortKey(key);
    const sorted = [...products].sort((a, b) => a[key] - b[key]);
    setProducts(sorted);
  };

  return (
    <section id="compare" className="compare-section">
      <h2>Compare Protein Products</h2>
      <div className="compare-controls">
        <label>Sort by: </label>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="protein">Protein</option>
          <option value="calories">Calories</option>
        </select>
      </div>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Calories</th>
            <th>Protein (g)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, price, calories, protein }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>{protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CompareSection;
