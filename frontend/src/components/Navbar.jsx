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
  const dropdownRef = useRef(null);
  const cartCount = useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + (item.qty || 1), 0)
  );

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
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="py-1 md:py-2 w-full">
          <div className="container mx-auto flex justify-between items-center h-14">
            {/* Logo Section */}
            <Link to="/">
              <div className="text-xl md:text-2xl flex items-center font-bold uppercase p-4">
                <p className="text-orange-600 translate-y-1">Smart</p>
                <p className="text-green-700 translate-y-1">Canteen</p>
                <img className="w-5 h-6 md:w-9 md:h-8 ml-1" src={logo} alt="" />
              </div>
            </Link>

            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-600 p-4">
                {NavbarData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="relative">
                      <NavLink
                        to={item.link}
                        className={({isActive}) => `flex flex-col items-center transition-colors duration-200 ${
                          isActive ? 'text-orange-600' : 'hover:text-orange-500'
                        }`}
                      >
                        {({isActive}) => (
                          <>
                            {Icon && <Icon className="text-xl mb-1" />}
                            <p className="text-sm font-medium">{item.name}</p>
                            <hr className={`w-full border-none h-[2px] bg-orange-600 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                          </>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* icon Section */}
            <div className="flex items-center gap-3 md:gap-5 md:text-2xl text-xl p-4">
              <button className="hidden md:block font-semibold mt-2">
                <CiSearch />
              </button>

              <Link to="/cart" className="relative mt-2">
                <button className="font-semibold text-2xl">
                  <PiShoppingCartThin />
                </button>
                <p
                  className={`${
                    cartCount ? "absolute" : "hidden"
                  } absolute right-[-1px] top-[-2px] w-3 h-3 text-[7px] md:w-4 md:h-4 md:text-[8px] text-center leading-relaxed bg-black text-white aspect-square rounded-full`}
                >
                  {cartCount}
                </p>
              </Link>
              <div className="group relative mt-2 z-30" ref={dropdownRef}>
                {/* Dropdown Toggle Button */}
                <button
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                  className="font-semibold text-xl"
                >
                  <VscAccount />
                </button>

                {/* Dropdown Menu */}
                {isDropdownVisible && (
                  <div className="absolute right-0 pt-4">
                    <div className="flex flex-col w-36 gap-2 px-5 py-3 bg-slate-100 text-gray-500 rounded text-sm">
                      <p
                        onClick={() => handleNavigation("/profile")}
                        className="cursor-pointer hover:text-black"
                      >
                        My Profile
                      </p>
                      <p
                        onClick={() => handleNavigation("/orders")}
                        className="cursor-pointer hover:text-black"
                      >
                        Orders
                      </p>
                      <p
                        onClick={() => handleNavigation("/")}
                        className="cursor-pointer hover:text-black"
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
      <div className="h-14 md:h-16"></div>
    </>
  );
};
export default Navbar;
