import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import CvSpacePage from './pages/CvSpacePage'

const BackgroundHandler: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.body.style.backgroundColor = path === "/cv-space" ? "#fff" : "#000";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [path]);

  return null;
};

const App = () => {
  return (
      <Router>
        <BackgroundHandler />
        <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/cv-space" element={<CvSpacePage/>} />
        </Routes>
      </Router>
  )
}

export default App
