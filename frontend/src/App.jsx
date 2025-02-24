import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
// Admin imports
import AdminCanteens from './pages/Admin/AdminCanteens';
import AdminChatSupport from './pages/Admin/AdminChatSupport';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import AdminLayout from './pages/Admin/AdminLayout';
// Canteen imports
import CanteenCommunication from './pages/Canteen/CanteenCommunication';
import CanteenDashboard from './pages/Canteen/CanteenDashboard';
import CanteenLayout from './pages/Canteen/CanteenLayout';
import CanteenMenu from './pages/Canteen/CanteenMenu';
import CanteenOrders from './pages/Canteen/CanteenOrders';
import CanteenRefunds from './pages/Canteen/CanteenRefunds';



import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import About from './pages/About';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2000 }} />
    <Router>
      <ConditionalNavbar />
      <Routes>
        {/* public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>} />
        
        {/* Canteen Routes */}
        <Route path="/canteen/:canteenId/*" element={<CanteenLayout />}>
          <Route index element={<CanteenDashboard />} />
          <Route path="communication" element={<CanteenCommunication />} />
          <Route path="menu" element={<CanteenMenu />} />
          <Route path="orders" element={<CanteenOrders />} />
          <Route path="refunds" element={<CanteenRefunds />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="canteens" element={<AdminCanteens />} />
          <Route path="chat-support" element={<AdminChatSupport />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
 
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin") || location.pathname.startsWith("/canteen");

  return hideNavbar ? null : <Navbar />;
};
export default App;