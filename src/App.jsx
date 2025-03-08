import React, { useState } from 'react';

// Style objects for inline styling
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  header: {
    background: 'linear-gradient(90deg, #e74c3c, #3498db)',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
  },
  mainTitle: {
    color: '#3498db',
    fontSize: '1.8rem',
    textAlign: 'center',
    margin: '30px 0 15px'
  },
  subtitle: {
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
    maxWidth: '800px',
    margin: '0 auto 30px'
  },
  sortContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  },
  sortGroup: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '400px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#555'
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white'
  },
  content: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  sidebar: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '300px'
  },
  mission: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #3498db'
  },
  missionHeading: {
    color: '#3498db',
    fontSize: '1.2rem',
    marginBottom: '15px'
  },
  missionText: {
    color: '#555',
    marginBottom: '15px',
    fontSize: '0.9rem'
  },
  products: {
    flex: '2',
    minWidth: '300px'
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #e74c3c',
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '15px'
  },
  productName: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#3498db'
  },
  productPrice: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    fontWeight: '600',
    color: '#e74c3c'
  },
  productDetail: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    color: '#555'
  },
  efficiency: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#3498db'
  },
  faqSection: {
    marginTop: '50px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  faqTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#3498db',
    textAlign: 'center'
  },
  faqItem: {
    marginBottom: '25px',
    paddingBottom: '25px',
    borderBottom: '1px solid #eee'
  },
  faqQuestion: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#e74c3c'
  },
  faqAnswer: {
    fontSize: '0.9rem',
    color: '#555'
  }
};

function App() {
  const [priceSort, setPriceSort] = useState('low-to-high');
  const [nutritionSort, setNutritionSort] = useState('');

  const handlePriceSortChange = (e) => {
    setPriceSort(e.target.value);
  };

  const handleNutritionSortChange = (e) => {
    setNutritionSort(e.target.value);
  };

  // Sample product data
  const products = [
    {
      name: "Whey Protein Isolate",
      price: "$29.99",
      calories: 120,
      protein: 25,
      efficiency: 4.8,
      image: "https://via.placeholder.com/200x150?text=Whey+Protein"
    },
    {
      name: "Plant-Based Protein",
      price: "$34.99",
      calories: 140,
      protein: 21,
      efficiency: 6.7,
      image: "https://via.placeholder.com/200x150?text=Plant+Protein"
    },
    {
      name: "Casein Protein",
      price: "$32.99",
      calories: 130,
      protein: 24,
      efficiency: 5.4,
      image: "https://via.placeholder.com/200x150?text=Casein+Protein"
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Protein Pals</h1>
      </header>

      <main>
        <h2 style={styles.mainTitle}>Find Your Perfect Protein Match</h2>
        <p style={styles.subtitle}>
          Compare protein products side by side to discover the best value 
          for your fitness and budget goals.
        </p>

        <div style={styles.sortContainer}>
          <div style={styles.sortGroup}>
            <label style={styles.label}>Sort by Price</label>
            <select
              value={priceSort}
              onChange={handlePriceSortChange}
              style={styles.select}
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          
          <div style={styles.sortGroup}>
            <label style={styles.label}>Sort by Nutritional Efficiency</label>
            <select
              value={nutritionSort}
              onChange={handleNutritionSortChange}
              style={styles.select}
            >
              <option value="">Select option</option>
              <option value="high-to-low">High to Low</option>
              <option value="low-to-high">Low to High</option>
            </select>
          </div>
        </div>

        <div style={styles.content}>
          <div style={styles.sidebar}>
            <div style={styles.mission}>
              <h3 style={styles.missionHeading}>Our Mission</h3>
              <p style={styles.missionText}>
                At Protein Pals, we believe everyone 
                deserves to find the most cost-effective and 
                nutritionally efficient protein products without 
                spending hours comparing labels and prices.
              </p>
              <p style={styles.missionText}>
                We've created this tool to help you quickly filter 
                and sort products based on what matters most to 
                you - whether that's your budget or your specific 
                nutritional goals.
              </p>
            </div>
          </div>

          <div style={styles.products}>
            {products.map((product, index) => (
              <div 
                style={styles.productCard} 
                key={index}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>Price: {product.price}</p>
                <p style={styles.productDetail}>Calories: {product.calories}</p>
                <p style={styles.productDetail}>Protein: {product.protein}g</p>
                <p style={styles.efficiency}>Efficiency: {product.efficiency} cal/g</p>
              </div>
            ))}
          </div>
        </div>

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
      </main>
    </div>
  );
}

export default App;