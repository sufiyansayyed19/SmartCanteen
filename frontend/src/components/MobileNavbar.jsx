import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

import NavbarData from '../data/NavbarData';

const MobileNavbar = () => {


    const [visibal, setVisibal] = useState(false);   

  return (
    <div className='text-2xl md:hidden z-30'>
        <MdMenu className="text-2xl cursor-pointer mr-4 " onClick={() => setVisibal(!visibal)} />
        {visibal && (
            <div className="absolute top-0 right-0 bg-white shadow-md w-3/5 h-3/6 ">
            <IoClose className="absolute top-3 left-3 text-2xl cursor-pointer" onClick={() => setVisibal(false)} />
            <ul className="flex flex-col items-center gap-6 text-gray-600 py-3 mt-9">
                {NavbarData.map((item) => (
                <li key={item.id}>
                    <NavLink to={item.link} className="flex flex-col items-center" onClick={() => setVisibal(false)} >
                        <p className="mb-0.5 text-sm">{item.name}</p>
                    </NavLink>
                </li>
                ))}
            </ul>
            </div>
        )}
    </div>
  )
}

export default MobileNavbar