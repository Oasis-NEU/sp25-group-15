import React, { useState } from 'react';
// Style objects for inline styling
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    background: 'linear-gradient(90deg, #e74c3c, #3498db)',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
  mainTitle: {
    color: '#3498db',
    fontSize: '1.8rem',
    textAlign: 'center',
    margin: '30px 0 15px',
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '800px',
    margin: '0 auto 30px',
  },
  sortContainer: {
    display: 'flex',
    justifyContent: 'flex-start',  
    gap: '40px',
    paddingLeft: '310px',         
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  
  sortGroup: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '400px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#e74c3c',
  },
  select: {
    width: 'auto',     
    padding: '8px',     
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white',
    height: '35px',    
    fontSize: '0.9rem'  
  },
  content: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
  },
  sidebar: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '300px',
  },
  mission: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #3498db',
  },
  missionHeading: {
    color: '#3498db',
    fontSize: '1.2rem',
    marginBottom: '15px',
  },
  missionText: {
    color: '#555',
    marginBottom: '15px',
    fontSize: '0.9rem',
  },
  products: {
    flex: '2',
    minWidth: '300px',
  },
  // productCard: {
  //   backgroundColor: 'white',
  //   borderRadius: '8px',
  //   padding: '20px',
  //   marginBottom: '20px',
  //   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  //   borderTop: '4px solid #e74c3c',
  //   transition: 'transform 0.3s, box-shadow 0.3s',
  // },
  // productImage: {
  //   width: '100%',
  //   height: 'auto',
  //   borderRadius: '4px',
  //   marginBottom: '15px',
  // },
  productName: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#3498db',
  },
  productPrice: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    fontWeight: '600',
    color: '#e74c3c',
  },
  productDetail: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    color: '#555',
  },
  efficiency: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#3498db',
  },
  faqSection: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  faqTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#3498db',
    textAlign: 'center',
  },
  faqQuestion: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#e74c3c',
  },
  faqAnswer: {
    fontSize: '1.4 rem',
    color: '#555',
  },
  productCard: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
    margin: "10px auto", 
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "auto",
    maxHeight: "150px",
    objectFit: "contain",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};

const products = [
  {
    name: 'Whey Protein Isolate',
    price: 29.99,
    calories: 120,
    protein: 25,
    weight: 500,
    image: 'https://m.media-amazon.com/images/I/81RRwEMq5jL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    name: 'Plant-Based Protein',
    price: 34.99,
    calories: 140,
    protein: 21,
    weight: 500,
    image: 'https://m.media-amazon.com/images/I/71lu0LrUI+L._AC_SY300_SX300_.jpg',
  },
  {
    name: 'Casein Protein',
    price: 32.99,
    calories: 130,
    protein: 24,
    weight: 500,
    image: 'https://m.media-amazon.com/images/I/71xhaB1CRkL._AC_SY879_.jpg',
  },
];

function App() {
  const [efficiencySort, setEfficiencySort] = useState(""); // Initial state is empty
  const [priceSort, setPriceSort] = useState(""); // Initial state is empty
  

  const sortedProducts = [...products]
  .map((p) => ({
    ...p,
    efficiency: p.protein / p.calories,
    pricePerGram: p.price / (p.weight / 1000),
  }))
  .sort((a, b) => {
    // which sorting method was changed last
    if (efficiencySort === "high-to-low" || efficiencySort === "low-to-high") {
      return efficiencySort === "high-to-low"
        ? b.efficiency - a.efficiency
        : a.efficiency - b.efficiency;
    }

    if (priceSort === "low-to-high" || priceSort === "high-to-low") {
      return priceSort === "low-to-high"
        ? a.pricePerGram - b.pricePerGram
        : b.pricePerGram - a.pricePerGram;
    }

    return 0; //this means no sorting was done
  });

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Protein Pals</h1>
      </header>

      <main>
        <h2 style={styles.mainTitle}>Find Your Perfect Protein Match</h2>
        <p style={styles.subtitle}>
          Compare protein products side by side to discover the best value for your fitness and budget goals.
        </p>

      <div style={styles.sortContainer}>


        <div style={styles.sortGroup}>
        <h3 style={styles.label}>Sort by Efficiency</h3>
        <select
          value={efficiencySort}
          onChange={(e) => {
            setEfficiencySort(e.target.value);
            setPriceSort(""); // Reset sorting when efficiency is changed
          }}
          style={styles.select}
        >
          <option value="">Select</option>
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
      </div>

      <div style={styles.sortGroup}>
        <h3 style={styles.label}>Sort by Price</h3>
        <select
          value={priceSort}
          onChange={(e) => {
            setPriceSort(e.target.value);
            setEfficiencySort(""); // Reset sorting when price is changed
          }}
          style={styles.select}
        >
          <option value="">Select</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>

        {sortedProducts.map((product, index) => (
          <div style={styles.productCard} key={index}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Price per Gram: ${product.pricePerGram.toFixed(4)}</p>
            <p>Protein Efficiency: {product.efficiency.toFixed(4)}</p>
            
          </div>
        ))}
      </main>

      <section style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Our Mission</h2>
        <div style={styles.faqItem}>
          <p style={styles.faqAnswer}>
            At Protein Pals, we believe everyone deserves to find the most cost-effective and nutritionally
            efficient protein products without spending hours comparing labels and prices. We've created this tool
            to help you quickly filter and sort products based on what matters most to you - whether that's your
            budget or your specific nutritional goals.
          </p>
        </div>
      </section>

      <section style={styles.faqSection}>
        <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqItem}>
          <h3 style={styles.faqQuestion}>How is nutritional efficiency calculated?</h3>
          <p style={styles.faqAnswer}>
            Nutritional efficiency is calculated by dividing the calories by the grams of protein in each product.
            A lower number means you're getting more protein for fewer calories, which is generally preferred for
            those looking to maximize protein intake while minimizing caloric impact.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;