import { useState } from 'react'
import logo from '/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
        </a>
        <a href="https://github.com/RinaLis/rpg_notes_frontend" target="_blank">
          <img src={logo} className="logo react" alt="NRI logo" />
        </a>
      </div>
      <h1>НРИ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
