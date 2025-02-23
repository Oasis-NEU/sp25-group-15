import { useState } from 'react'
import './App.css'

function App() {

  /*return(
    <div>
      <p>World</p>
    </div>
  )*/
  /*return(
    <div>
      <p>World</p>
    </div>
  )*/
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Protein Pow</h1>
      {/* <div className="filter price">
        <div className = "content">
          buttonText="Dropdown button" content = {<p>Hello World!</p>} 
        </div>
      </div> */}

      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

    
    </>
  )

}

export default App
