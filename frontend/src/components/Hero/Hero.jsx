
import LogoIcon from '../../assets/image.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

    return (
        <section id='hero' className="  flex w-full ">
      {/* Flex Container */}
      <div className='container md:h-[25rem] h-[18.75rem] w-full flex flex-col-reverse items-center px-6 mx-auto mt-3 md:mt-4   md:flex-row bg-orange-100'>
        {/* Left Item */}
        <div className='flex flex-col mb-4  md:w-1/2 items-center  '>
          <h1 className='max-w-md text-xl text-red-950 font-bold text-center md:text-5xl md:text-left md:p-2 leading-normal'>
            Craving something  
          </h1>
          <h1 className='max-w-md text-xl text-red-950 font-bold text-center md:text-5xl md:text-left md:p-2 leading-normal'>
            delicious? 🍕🍔😋 
          </h1>
          <p className='max-w-sm text-center text-sm md:text-lg md:text-left md:mt-6'>
            Smart Canteen serves up fresh flavors, fast! Taste the magic, fuel your day! 🚀
          </p>
          <div className="flex w-max gap-6 mt-2 md:mt-6 ">
            <button onClick={()=> navigate('/menu')} className="px-3 py-1 md:px-6 md:py-2 text-sm  bg-red-950 text-white rounded-lg md:rounded-xl ">Menu</button>
            <button onClick={()=> navigate('/user/:userId/orders')} className="px-3 py-1 text-sm bg-red-950 text-white rounded-lg md:rounded-xl mr-5">Order Now</button>
          </div>
          
        </div>
        {/* Image */}
        <div className='md:w-1/2 flex flex-row-reverse justify-center '>
          <img className="h-36  md:h-80 pt-1 md:mt-4 " src={LogoIcon} alt='' />
        </div>
      </div>
    </section>

    )
  }
  
  export default Hero;
//   <section className="w-full min-h-[650px] flex justify-center items-center bg-[#FFF2DB]">
//     <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center px-6">
//         {/* Canteen Tag */}
//         <div className="flex flex-col justify-center items-center md:items-start relative z-10">
//             <div className="text-slate-700 space-y-6 max-w-md">
//                 <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed xl:leading-loose">
//                     Craving something <span className="text-red-950">delicious? 🍕🍔😋</span> 
//                 </h1>
//                 <p className="text-lg font-medium">Order Now before next Class 😋</p>
//                 <p className="text-lg text-gray-600">
//                     Smart Canteen serves up fresh flavors, fast! Taste the magic, fuel your day! 🚀
//                 </p>
//             </div>
//         </div>
//     </div>
//     </section>