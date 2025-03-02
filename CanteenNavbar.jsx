import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img1.png";
import { VscAccount } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineInventory2, MdOutlineFastfood } from "react-icons/md";
import { TbShoppingCartCheck } from "react-icons/tb";

// Mobile Navbar Component
const CanteenMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Canteen navbar data with icons
  const CanteenNavbarData = [
    {
      id: 1,
      name: "Dashboard",
      link: "/canteen",
      icon: <MdOutlineFastfood className="text-xl" />
    },
    {
      id: 2,
      name: "Products",
      link: "/canteen/products",
      icon: <MdOutlineInventory2 className="text-xl" />
    },
    {
      id: 3,
      name: "Orders",
      link: "/canteen/orders",
      icon: <TbShoppingCartCheck className="text-xl" />
    }
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="block p-2 focus:outline-none"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMenu className="text-2xl" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50" onClick={closeMenu}>
          {/* Menu Content - preventing click propagation to avoid closing when clicking inside */}
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Close Menu"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Canteen Label */}
            <div className="px-6 py-2 mb-4 border-b border-gray-700">
              <p className="text-lg font-bold text-orange-400">Canteen Panel</p>
            </div>

            {/* Menu Items */}
            <nav className="px-4">
              <ul className="space-y-4">
                {CanteenNavbarData.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-3 py-2 px-4 rounded-md transition-colors ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Canteen Actions */}
            <div className="absolute bottom-0 w-full px-4 py-6 border-t border-gray-700">
              <div className="space-y-2">
                <Link
                  to="/canteen/profile"
                  onClick={closeMenu}
                  className="block w-full py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
                >
                  Canteen Profile
                </Link>
                <Link
                  to="/canteen/settings"
                  onClick={closeMenu}
                  className="block w-full py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
                >
                  Settings
                </Link>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block w-full py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Canteen Navbar Component
const CanteenNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to handle navigation and hide the dropdown
  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownVisible(false);
  };

  // Canteen navbar data with icons
  const CanteenNavbarData = [
    {
      id: 1,
      name: "Dashboard",
      link: "/canteen",
      icon: <MdOutlineFastfood className="text-lg" />
    },
    {
      id: 2,
      name: "Products",
      link: "/canteen/products",
      icon: <MdOutlineInventory2 className="text-lg" />
    },
    {
      id: 3,
      name: "Orders",
      link: "/canteen/orders",
      icon: <TbShoppingCartCheck className="text-lg" />
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md z-50">
        <nav className="py-1 md:py-2 w-full">
          <div className="container mx-auto flex justify-between items-center h-14">
            {/* Logo Section */}
            <Link to="/canteen">
              <div className="text-xl md:text-2xl flex items-center font-bold uppercase p-4">
                <p className="text-orange-400 translate-y-1">Smart</p>
                <p className="text-green-400 translate-y-1">Canteen</p>
                <img className="w-5 h-6 md:w-9 md:h-8 ml-1" src={logo} alt="" />
                <span className="ml-2 text-sm text-gray-300">Vendor</span>
              </div>
            </Link>

            {/* Desktop Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-300 p-4">
                {CanteenNavbarData.map((item) => {
                  return (
                    <li key={item.id} className="relative">
                      <NavLink
                        to={item.link}
                        className={({ isActive }) => 
                          `flex items-center gap-1 ${isActive ? 'text-white' : 'hover:text-white'}`
                        }
                      >
                        {item.icon}
                        <p className="mb-0.5">{item.name}</p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Canteen Account Section */}
            <div className="flex items-center gap-3 md:gap-5 md:text-2xl text-xl p-4">
              <div className="hidden md:block group relative mt-2 z-30">
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
                    <div className="flex flex-col w-36 gap-2 px-5 py-3 bg-gray-700 text-gray-200 rounded text-sm">
                      <p
                        onClick={() => handleNavigation("/canteen/profile")}
                        className="cursor-pointer hover:text-white"
                      >
                        Canteen Profile
                      </p>
                      <p
                        onClick={() => handleNavigation("/canteen/settings")}
                        className="cursor-pointer hover:text-white"
                      >
                        Settings
                      </p>
                      <p
                        onClick={() => handleNavigation("/")}
                        className="cursor-pointer hover:text-white"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Hamburger Menu Section */}
              <CanteenMobileNavbar />
            </div>
          </div>
        </nav>
      </div>

      {/* Add a spacer div to prevent content from hiding under the fixed navbar */}
      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default CanteenNavbar;