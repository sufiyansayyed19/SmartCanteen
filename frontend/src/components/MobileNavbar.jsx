import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

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
                className={`fixed top-0 right-0 bg-white shadow-lg w-3/5 h-screen z-50 transition-transform duration-300 ease-in-out ${
                    visible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <IoClose 
                    className="absolute top-3 left-3 text-2xl cursor-pointer" 
                    onClick={() => setVisible(false)} 
                />
                <ul className="flex flex-col items-center gap-6 text-gray-600 py-3 mt-16">
                    {NavbarData.map((item) => (
                        <li key={item.id}>
                            <NavLink 
                                to={item.link} 
                                className="flex flex-col items-center" 
                                onClick={() => setVisible(false)}
                            >
                                <p className="mb-0.5 text-lg">{item.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default MobileNavbar