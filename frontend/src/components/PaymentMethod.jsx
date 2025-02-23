
import RazorpayLogo from  '../assets/razorpay_logo.png';
import { useState } from 'react';

const PaymentMethod = () => {
    const [ method, setMethod ] = useState('');
  return (
    
    <div className='flex gap-3 flex-col lg:flex-row'>
        <div onClick={ ()=> setMethod('razorpay')} className='flex items-center gap-3 border  mt-3 px-5  py-1 md:px-6 md:py-2 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-950': ""} `}></p>
            <img className='h-5 mx-4' src={RazorpayLogo} alt=''/>
        </div>
        <div onClick={ ()=> setMethod('cod')} className='flex items-center gap-3 border  mt-3 px-5  py-1 md:px-6 md:py-2 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-950': ""} `}></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH </p>
        </div>
    </div>
  )
}

export default PaymentMethod

