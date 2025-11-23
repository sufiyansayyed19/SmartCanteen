import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import logo from '../assets/img1.png';

import NavbarData from '../data/NavbarData';


const MobileNavbar = () => {
    const [visible, setVisible] = useState(false);   

    return (
        <div className='text-2xl md:hidden'>
            <MdMenu className="text-2xl cursor-pointer mr-4" onClick={() => setVisible(!visible)} />
            
            {/* Overlay - fades in when menu is visible */}
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
                    visible ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setVisible(false)}
            ></div>
            
            {/* Menu panel - slides in from left to right */}
            <div 
                className={`fixed top-0 right-0 bg-white shadow-2xl w-64 h-screen z-50 transition-transform duration-300 ease-in-out ${
                    visible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <IoClose 
                    className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 hover:text-gray-900 transition-colors" 
                    onClick={() => setVisible(false)} 
                />
                
                {/* Logo Section */}
                <div className="flex items-center justify-center py-6 mt-4 mb-2">
                    <div className="text-2xl flex items-center font-bold uppercase">
                        <p className="text-orange-600">Smart</p>
                        <p className="text-green-700">Canteen</p>
                        <img className="w-7 h-8 ml-2" src={logo} alt="SmartCanteen" />
                    </div>
                </div>
                
                <div className="border-t border-gray-200 mx-4"></div>
                
                <ul className="flex flex-col gap-1 py-4 px-3">
                    {NavbarData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id}>
                                <NavLink 
                                    to={item.link} 
                                    className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                                        isActive 
                                            ? 'bg-orange-50 text-orange-600 font-semibold' 
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setVisible(false)}
                                >
                                    {Icon && <Icon className="text-xl" />}
                                    <span className="text-base">{item.name}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default MobileNavbar