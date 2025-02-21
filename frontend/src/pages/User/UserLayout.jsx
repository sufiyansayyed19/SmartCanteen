import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h2>Welcome to SmartCanteen</h2>
      <nav>
        <Link to="/user/menu">Menu</Link> | 
        <Link to="/user/cart">Cart</Link> | 
        <Link to="/user/orders">Orders</Link> | 
        <Link to="/user/profile">Profile</Link>
      </nav>
      
      <Outlet /> {/* This will render the matching child route */}
    </div>
  );
};

export default UserLayout;
