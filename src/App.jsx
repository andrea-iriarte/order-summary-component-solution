import { useState } from 'react'
import './App.css'
import patternDesktop from './images/pattern-background-desktop.svg'
import patternMobile from './images/pattern-background-mobile.svg'
import CoverImage from './components/CoverImage'
import SummaryCard from './components/SummaryCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='app-container'>
      <img src={patternDesktop} />
      <div className='App'>
        <CoverImage />
        <SummaryCard />

      </div>
    </div>
  )
}

export default App
