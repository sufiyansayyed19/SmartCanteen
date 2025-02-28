import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img1.png";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineInventory2, MdOutlineAddBox } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";
import AdminMobileNavbar from "./AdminMobileNavbar";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to handle navigation and hide the dropdown
  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownVisible(false);
  };

  // Admin navbar data with icons
  const AdminNavbarData = [
    {
      id: 1,
      name: "Dashboard",
      link: "/admin",
      icon: <RiDashboardLine className="text-lg" />
    },
    {
      id: 2,
      name: "Products",
      link: "/admin/products",
      icon: <MdOutlineInventory2 className="text-lg" />
    },
    {
      id: 3,
      name: "Add Products",
      link: "/admin/add-product",
      icon: <MdOutlineAddBox className="text-lg" />
    },
    {
      id: 4,
      name: "Orders",
      link: "/admin/orders",
      icon: <TbShoppingCartCog className="text-lg" />
    }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md z-50">
        <nav className="py-1 md:py-2 w-full">
          <div className="container mx-auto flex justify-between items-center h-14">
            {/* Logo Section */}
            <Link to="/admin">
              <div className="text-xl md:text-2xl flex items-center font-bold uppercase p-4">
                <p className="text-orange-400 translate-y-1">Smart</p>
                <p className="text-green-400 translate-y-1">Canteen</p>
                <img className="w-5 h-6 md:w-9 md:h-8 ml-1" src={logo} alt="" />
                <span className="ml-2 text-sm text-gray-300">Admin</span>
              </div>
            </Link>

            {/* Desktop Menu Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-300 p-4">
                {AdminNavbarData.map((item) => {
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

            {/* Admin Account Section */}
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
                        onClick={() => handleNavigation("/admin/profile")}
                        className="cursor-pointer hover:text-white"
                      >
                        Admin Profile
                      </p>
                      <p
                        onClick={() => handleNavigation("/admin/settings")}
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
              <AdminMobileNavbar />
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