import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPages/LandingPage';
import ShopRegistration from './landingPages/ShopRegistration';
import RegisterShopComp from './landingPages/RegisterShopComp';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<ShopRegistration />} />
        <Route path="/registerShop" element={<RegisterShopComp />} />
       
      </Routes>
    </Router>
  );
}

export default App;
