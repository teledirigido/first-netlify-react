import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <h1>My First Netlify APP</h1>      
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

      <main>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
