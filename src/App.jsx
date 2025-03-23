import React, { useState, useEffect } from 'react';
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
  loadingText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#3498db',
    margin: '30px 0',
  },
  errorText: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#e74c3c',
    margin: '30px 0',
  },
  buyButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
};

function App() {
  const [sortOption, setSortOption] = useState("");
  const [displayCount, setDisplayCount] = useState(100); // Default to showing all products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch protein powder data from Flask API
    const fetchData = async () => {
      try {
        setLoading(true);
        // Direct request to Flask backend
        const response = await fetch('http://127.0.0.1:5000/api/protein-powders', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Log the raw response for debugging
        const text = await response.text();
        console.log("Raw response:", text);
        
        // Try to parse the JSON
        let data;
        try {
          data = JSON.parse(text);
        } catch (error) {
          throw new Error(`Invalid JSON response: ${text.substring(0, 100)}...`);
        }
        
        console.log("Data received from API:", data);
        
        // Process the data to add the efficiency property
        const processedData = data.map(product => ({
          ...product,
          efficiency: (product.properserv / (product.price / product.servings))
        }));
        
        console.log("Processed data:", processedData);
        setProducts(processedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching protein powder data:", err);
        setError(`Failed to load protein powder data: ${err.message}`);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Calculate all the metrics we need for sorting
  const productsWithMetrics = [...products].map(product => ({
    ...product,
    proteinPerServing: product.properserv,
    proteinPer100Cal: (product.properserv / product.calories) * 100,
    proteinPerDollar: product.properserv / (product.price / product.servings)
  }));
  
  // Sort the products based on the selected option
  const sortedProducts = [...productsWithMetrics].sort((a, b) => {
    switch (sortOption) {
      case "protein-per-serving":
        return b.proteinPerServing - a.proteinPerServing;
      case "protein-per-100-cal":
        return b.proteinPer100Cal - a.proteinPer100Cal;
      case "protein-per-dollar":
        return b.proteinPerDollar - a.proteinPerDollar;
      default:
        return 0; // No sorting
    }
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
            <h3 style={styles.label}>Sort Products By</h3>
            <select
              id="sort-option"
              name="sort-option"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={styles.select}
            >
              <option value="">Select an option</option>
              <option value="protein-per-serving">Protein Per Serving (Highest First)</option>
              <option value="protein-per-100-cal">Protein Per 100 Calories</option>
              <option value="protein-per-dollar">Protein Per Dollar</option>
            </select>
          </div>
          
          <div style={styles.sortGroup}>
            <h3 style={styles.label}>Top Products to Display</h3>
            <select
              id="display-count"
              name="display-count"
              value={displayCount}
              onChange={(e) => setDisplayCount(Number(e.target.value))}
              style={styles.select}
            >
              {[3, 5, 10, 25, 50, 100].map(count => (
                <option key={count} value={count}>Top {count}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p style={styles.loadingText}>Loading protein powder data...</p>
        ) : error ? (
          <p style={styles.errorText}>{error}</p>
        ) : (
          sortedProducts.slice(0, displayCount).map((product, index) => (
            <div style={styles.productCard} key={index}>
              <h3>{product.name}</h3>
              <img src={product.image_url} alt={product.name} style={styles.productImage} />
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Calories per serving: {product.calories}</p>
              <p>Protein per serving: {product.properserv}g</p>
              <p>Total servings: {product.servings}</p>
              <p>Price per serving: ${(product.price / product.servings).toFixed(2)}</p>
              <p>Protein per 100 calories: {product.proteinPer100Cal.toFixed(2)}g</p>
              <p>Protein per dollar: {product.proteinPerDollar.toFixed(2)}g</p>
              <a href={product.web_url} target="_blank" rel="noopener noreferrer">
                <button style={styles.buyButton}>Buy Now</button>
              </a>
            </div>
          ))
        )}
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
          <h3 style={styles.faqQuestion}>Why Is This Important?</h3>
          <p style={styles.faqAnswer}>
            For a serious athlete, protein is a crucial nutrient that helps build and repair muscle tissue, 
            which is essential for muscle growth and recovery. However, there is no website that 
            allows you to sort protein powders by stats that matter such as protein per 100 calories and price per serving so thats where we come in to offer the best product imagineable.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;