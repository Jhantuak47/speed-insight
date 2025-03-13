import { useState } from 'react'
import BaseLayout from './components/Layouts'
import PerformanceInsight from './components/Performance'
import InsightCanvas from './components/InsightsCanvas'

function App() {

  return (
    <div className="main-app-wrapper">
      <div className="main-content w-[80%] max-w-9/10 mx-auto">
        <InsightCanvas />
      </div>
    </div>

  )
}

export default App
