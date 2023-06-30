import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as MyComponent from './components'

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-[#1a1a1a]">
        <div className="">
          <MyComponent.Navbar />
        </div>
        <MyComponent.Hero />
        <MyComponent.About />
        <MyComponent.Experience />
        <MyComponent.Tech />
        <MyComponent.Works />
        <div className="relative z-0">
          <MyComponent.Contact />
        </div>
      </div>
    </Router>
  )
}

export default App
