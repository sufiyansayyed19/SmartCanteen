import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img1.png";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
            <Link to="/admin">
              <div className="text-xl md:text-2xl flex items-center font-bold uppercase p-4">
                <p className="text-orange-600 translate-y-1">Smart</p>
                <p className="text-green-700 translate-y-1">Canteen</p>
                <img className="w-5 h-6 md:w-9 md:h-8 ml-1" src={logo} alt="" />
              </div>
            </Link>

            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-600 p-4">
                <li className="relative">
                  <NavLink to="/admin" className="flex flex-col items-center">
                    <p className="mb-0.5">Home</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-600 transition-opacity duration-300 opacity-0 a.active:opacity-100" />
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/admin/products"
                    className="flex flex-col items-center"
                  >
                    <p className="mb-0.5">Products</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-600 transition-opacity duration-300 opacity-0 a.active:opacity-100" />
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/admin/add-product"
                    className="flex flex-col items-center"
                  >
                    <p className="mb-0.5">Add Product</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-600 transition-opacity duration-300 opacity-0 a.active:opacity-100" />
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/admin/orders"
                    className="flex flex-col items-center"
                  >
                    <p className="mb-0.5">Orders</p>
                    <hr className="w-3/4 border-none h-[1.5px] bg-gray-600 transition-opacity duration-300 opacity-0 a.active:opacity-100" />
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Profile Dropdown Section */}
            <div className="flex items-center gap-3 md:gap-5 md:text-2xl text-xl p-4">
              <div className="group relative mt-2 z-30">
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
                        onClick={() => handleNavigation("/admin/profile")}
                        className="cursor-pointer hover:text-black"
                      >
                        My Profile
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
          </div>
        </nav>
      </div>

      {/* Add a spacer div to prevent content from hiding under the fixed navbar */}
      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default AdminNavbar;