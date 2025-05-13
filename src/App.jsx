import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPages/LandingPage';
import ShopRegistration from './landingPages/ShopRegistration';
import RegisterShopComp from './landingPages/RegisterShopComp';
import ProtectedRoute from './Protected/ProtectedRoute';
import DashboardLayout from './Dashboards/DashboardLayout';
import Dashboard from './sidebarFiles/Dashboard';
import Inventory from './sidebarFiles/Inventory';
import Orders from './sidebarFiles/Orders';
import Profile from './sidebarFiles/Profile';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    
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
      <ToastContainer />
    </Router>

  
    </>
  );
}

export default App;
