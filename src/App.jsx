import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPages/LandingPage';
import ShopRegistration from './landingPages/ShopRegistration';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<ShopRegistration />} />
       
      </Routes>
    </Router>
  );
}

export default App;
