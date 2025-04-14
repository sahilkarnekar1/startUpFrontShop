import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPages/LandingPage';
import ShopRegistration from './landingPages/ShopRegistration';
import RegisterShopComp from './landingPages/RegisterShopComp';
import ProtectedRoute from './Protected/ProtectedRoute';
import DashboardLayout from './Dashboards/DashboardLayout';
import Dashboard from './tempFiles/Dashboard';
import Inventory from './tempFiles/Inventory';
import Orders from './tempFiles/Orders';
import Profile from './tempFiles/Profile';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<ShopRegistration />} />
        <Route path="/registerShop" element={<RegisterShopComp />} />

     {/* Protected Routes */}
     <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
