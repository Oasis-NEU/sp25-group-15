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
      <div className="filter price">
        <div className = "content">
          <Dropdown
          buttonText="Dropdown button" content = {<p>Hello World!</p>} />
        </div>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

}

export default App
