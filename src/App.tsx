import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import * as MyComponent from './components'
import BackToTopBtn from './components/back-to-top-btn/BackToTopBtn'

const App = () => {
  return (
    <Router>
        <MyComponent.Navbar />
        <MyComponent.Hero />
        <MyComponent.About />
        <MyComponent.Experience />
        <MyComponent.Tech />
        <MyComponent.Works />
        <div className="relative z-0">
          <MyComponent.Contact />
        </div>
      <BackToTopBtn />
    </Router>
  )
}

export default App
