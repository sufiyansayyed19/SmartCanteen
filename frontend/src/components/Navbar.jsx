import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img1.png'
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { VscAccount } from "react-icons/vsc";
// import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import NavbarData from '../data/NavbarData';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      
    const navigate = useNavigate();
        return (
        <>
            <nav className='py-0'>
                <div className='container mx-auto flex justify-between items-center pt-5 h-14'>
                    {/* Logo Section */}
                    <Link to='/'>    
                        <div className='text-2xl flex items-center font-bold uppercase p-4'>
                            <p className='text-orange-600 translate-y-1'>Smart</p>
                            <p className='text-green-700 translate-y-1'>Canteen</p>
                            <img className='w-9 h-8' src={logo} alt=''/>
                        </div>
                    </Link>
                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600 p-4'>
                            {NavbarData.map((item)=>{
                                return (
                                    <li key={item.id} className="relative">
                                        <NavLink to={item.link} className="flex flex-col items-center">
                                            <p className='mb-0.5'>{item.name}</p>
                                            <hr className='w-3/4 border-none h-[1.5px] bg-gray-600 transition-opacity duration-300 opacity-0 a.active:opacity-100' />   
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                    {/* icon Section */}
                    <div className='flex items-center  gap-3 md:gap-5 md:text-2xl text-xl p-4'>
                        
                        <button className=' hidden md:block font-semibold mt-2 '><CiSearch/></button>
                        
                        <Link to="/cart" className = "relative mt-2">
                            <button className=' font-semibold  '><PiShoppingCartThin/></button>
                            <p className="absolute right-[-1px] top-[-2px] w-3 h-3 text-[6px] md:w-4 md:h-4 md:text-[8px] text-center leading-relaxed bg-black text-white aspect-square rounded-full">0</p>
                        </Link>
                        <div className='group relative mt-2'>
                            <button className=' font-semibold '><VscAccount/></button>
                            {/* <img className='w-5 cursor-pointer'  src={assets.profile_icon} alt="profile" /> */}
                            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                                <div className="flex flex-col w-36 gap-2 px-5 py-3 bg-slate-100 text-gray-500 rounded text-sm ">
                                    <p onClick={()=> navigate('/user/:userId')} className="cursor-pointer hover:text-black">My Profile</p>
                                    <p onClick={()=> navigate('/user/:userId/orders')} className="cursor-pointer hover:text-black">Orders</p>
                                    <p onClick={()=> navigate('/')} className="cursor-pointer hover:text-black">Logout</p>
                                </div>
                                 {/*More logic to be added at logout  */}
                            </div>           
                        </div>
                    </div>
                    {/* Mobile Hamburger Menu Section */}
                    <MobileNavbar/>
                </div>
            </nav>
        
        </>

  )
}

export default Navbar