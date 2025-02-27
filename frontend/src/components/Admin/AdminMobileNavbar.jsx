import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineInventory2, MdOutlineAddBox } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";

const AdminMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Admin navbar data with icons
  const AdminNavbarData = [
    {
      id: 1,
      name: "Dashboard",
      link: "/admin",
      icon: <RiDashboardLine className="text-xl" />
    },
    {
      id: 2,
      name: "Products",
      link: "/admin/products",
      icon: <MdOutlineInventory2 className="text-xl" />
    },
    {
      id: 3,
      name: "Add Products",
      link: "/admin/add-product",
      icon: <MdOutlineAddBox className="text-xl" />
    },
    {
      id: 4,
      name: "Orders",
      link: "/admin/orders",
      icon: <TbShoppingCartCog className="text-xl" />
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

            {/* Admin Label */}
            <div className="px-6 py-2 mb-4 border-b border-gray-700">
              <p className="text-lg font-bold text-orange-400">Admin Panel</p>
            </div>

            {/* Menu Items */}
            <nav className="px-4">
              <ul className="space-y-4">
                {AdminNavbarData.map((item) => (
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

            {/* Admin Actions */}
            <div className="absolute bottom-0 w-full px-4 py-6 border-t border-gray-700">
              <div className="space-y-2">
                <Link
                  to="/admin/profile"
                  onClick={closeMenu}
                  className="block w-full py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
                >
                  Admin Profile
                </Link>
                <Link
                  to="/admin/settings"
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

export default AdminMobileNavbar;