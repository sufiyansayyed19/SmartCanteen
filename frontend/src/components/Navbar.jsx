import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img1.png";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import MobileNavbar from "./MobileNavbar";
import NavbarData from "../data/NavbarData";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const cartCount = useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + (item.qty || 1), 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsDropdownVisible(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  


  // Function to handle navigation and hide the dropdown
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setIsDropdownVisible(false); // Hide the dropdown
  };
  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-orange-50/95 backdrop-blur-lg shadow-lg' 
          : 'bg-orange-50/80 backdrop-blur-md'
      }`}>
        <nav className="py-2 md:py-3 w-full">
          <div className="container mx-auto flex justify-between items-center h-16 lg:ml-5">
            {/* Logo Section */}
            <Link to="/" className="group">
              <div className="text-xl md:text-2xl flex items-center font-bold uppercase p-4 transition-transform duration-300 group-hover:scale-105">
                <p className="text-orange-600 translate-y-1 transition-colors duration-300 group-hover:text-orange-700">Smart</p>
                <p className="text-green-700 translate-y-1 transition-colors duration-300 group-hover:text-green-800">Canteen</p>
                <img className="w-5 h-6 md:w-9 md:h-8 ml-1 transition-transform duration-300 group-hover:rotate-12" src={logo} alt="SmartCanteen" />
              </div>
            </Link>

            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-2 text-gray-700 p-4">
                {NavbarData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="relative group">
                      <NavLink
                        to={item.link}
                        className={({isActive}) => `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200' 
                            : 'hover:bg-orange-50 hover:text-orange-600 hover:scale-105'
                        }`}
                      >
                        {({isActive}) => (
                          <>
                            {Icon && <Icon className={`text-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />}
                            <span className="text-sm font-medium">{item.name}</span>
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* icon Section */}
            <div className="flex items-center gap-2 md:gap-4 md:text-2xl text-xl p-4 lg:mr-6">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-50 transition-all duration-300 hover:scale-110 hover:text-orange-600">
                <CiSearch className="text-2xl" />
              </button>

              <Link to="/cart" className="relative group">
                <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-50 transition-all duration-300 group-hover:scale-110 hover:text-orange-600">
                  <PiShoppingCartThin className="text-2xl" />
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <div className="group relative z-30" ref={dropdownRef}>
                {/* Dropdown Toggle Button */}
                <button
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-50 transition-all duration-300 hover:scale-110 hover:text-orange-600"
                >
                  <VscAccount className="text-xl" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownVisible && (
                  <div className="absolute right-0 pt-4">
                    <div className="flex flex-col w-40 gap-1 p-2 bg-white/95 backdrop-blur-md text-gray-700 rounded-xl shadow-2xl border border-gray-100">
                      <p
                        onClick={() => handleNavigation("/profile")}
                        className="cursor-pointer hover:bg-orange-50 hover:text-orange-600 px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        My Profile
                      </p>
                      <p
                        onClick={() => handleNavigation("/orders")}
                        className="cursor-pointer hover:bg-orange-50 hover:text-orange-600 px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        Orders
                      </p>
                      <div className="h-px bg-gray-200 my-1"></div>
                      <p
                        onClick={() => handleNavigation("/")}
                        className="cursor-pointer hover:bg-red-50 hover:text-red-600 px-4 py-2 rounded-lg transition-all duration-200"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Hamburger Menu Section */}
            <MobileNavbar />
          </div>
        </nav>
      </div>

      {/* Add a spacer div to prevent content from hiding under the fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};
export default Navbar;
