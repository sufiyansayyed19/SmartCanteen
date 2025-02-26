import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
// Admin imports
import AdminHome from './pages/Admin/AdminHome';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminAddProduct from './pages/Admin/AdminAddProduct';
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
import Contact from './pages/Contact';
import Profile from './pages/profile';
import AdminNavbar from './components/Admin/AdminNavbar';
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2000 }} />
    <Router>
      <ConditionalNavbar />
      <AdminNav/>
      <Routes>

        {/* public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

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
          <Route index element={<AdminHome />} />
          <Route path="add-product" element={<AdminAddProduct />} />
          <Route path="products" element={<AdminProducts />} />
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
const AdminNav = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin")

  return hideNavbar ? <AdminNavbar /> : null;
};
export default App;