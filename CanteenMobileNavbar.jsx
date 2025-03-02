import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { IoClose } from "react-icons/io5";
import { 
  MdFastfood, 
  MdOutlineDeliveryDining,
  MdOutlineAnalytics,
  MdLogout
} from 'react-icons/md';

const CanteenMobileNavbar = () => {
    const [visible, setVisible] = useState(false);   

    // Canteen navigation data
    const canteenNavItems = [
        {
            id: 1,
            name: "Products",
            link: "/canteen/products",
            icon: <MdFastfood className="text-2xl text-orange-500" />
        },
        {
            id: 2,
            name: "Orders",
            link: "/canteen/orders",
            icon: <MdOutlineDeliveryDining className="text-2xl text-orange-500" />
        },
        {
            id: 3,
            name: "Analytics",
            link: "/canteen/analytics",
            icon: <MdOutlineAnalytics className="text-2xl text-orange-500" />
        },
        {
            id: 4,
            name: "Logout",
            link: "/logout",
            icon: <MdLogout className="text-2xl text-orange-500" />
        }
    ];

    return (
        <div className='text-2xl md:hidden'>
            <MdMenu className="text-2xl cursor-pointer mr-4 text-orange-500" onClick={() => setVisible(!visible)} />
            
            {/* Overlay - fades in when menu is visible */}
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
                    visible ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setVisible(false)}
            ></div>
            
            {/* Menu panel - slides in from right to left */}
            <div 
                className={`fixed top-0 right-0 bg-white shadow-lg w-3/5 h-screen z-50 transition-transform duration-300 ease-in-out ${
                    visible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Header with close button */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-orange-500">Canteen Portal</h2>
                    <IoClose 
                        className="text-2xl cursor-pointer text-gray-600" 
                        onClick={() => setVisible(false)} 
                    />
                </div>
                
                {/* Navigation links */}
                <ul className="flex flex-col gap-2 text-gray-600 p-4">
                    {canteenNavItems.map((item) => (
                        <li key={item.id} className={item.id === 4 ? "mt-auto pt-4 border-t border-gray-200" : ""}>
                            <NavLink 
                                to={item.link} 
                                className={({isActive}) => 
                                    `flex items-center gap-3 p-3 rounded-lg ${
                                        isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'
                                    }`
                                }
                                onClick={() => setVisible(false)}
                            >
                                {item.icon}
                                <span className="text-base">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CanteenMobileNavbar;