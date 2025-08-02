import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
// Admin imports
import AdminHome from './pages/Admin/AdminHome';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminAddProduct from './pages/Admin/AdminAddProduct';
import AdminNavbar from './components/Admin/AdminNavbar';

// Canteen imports
import CanteenHome from './pages/Canteen/CanteenHome';
import CanteenOrders from './pages/Canteen/CanteenOrders';



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
import Profile from './pages/Profile';
import AdminUpdateProduct from './pages/Admin/AdminUpdateProduct';
// import CanteenNavbar from './components/Canteen/CanteenNavbar';
function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2000 }} />
    <Router>
      <ConditionalNavbar />
      <AdminNav/>
      {/* <CanteenNav/> */}
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
        <Route path="/canteen" element={<CanteenHome />} />
        <Route path="/canteen/orders" element={<CanteenOrders />} />



        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-product" element={<AdminAddProduct />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/edit-product/:id" element={<AdminUpdateProduct />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        

        
    
 
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
// const CanteenNav = () => {
//   const location = useLocation();
//   const hideNavbar = location.pathname.startsWith("/canteen")

//   return hideNavbar ? <CanteenNavbar /> : null;
// };

export default App;
