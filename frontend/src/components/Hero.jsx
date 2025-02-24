
import LogoIcon from '../assets/chefWithFood.png'
import spinningPlate from '../assets/spinningPlate.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

    return (
      <section id='hero' className="  flex w-full ">
      {/* Flex Container */}
      <div className='container  md:h-[25rem] h-[20rem] w-full flex flex-col-reverse items-center px-6 mx-auto    md:flex-row bg-orange-100'>
        {/* Left Item */}
        <div className='flex flex-col mb-4  md:w-1/2 items-center'>
          <h1 className='max-w-md text-xl text-red-950 font-bold text-center md:text-[2.5rem] md:text-left md:p-2 leading-normal'>
            Craving something  
          </h1>
          <h1 className='max-w-md text-xl text-red-950 font-bold text-center md:text-[2.5rem] md:text-left '>
            delicious? 🍟🍔🥤 
          </h1>
          <p className='max-w-sm  text-center text-xs my-2 md:text-lg  md:mt-6'>
            Smart Canteen serves up fresh flavors, fast! Taste the magic, fuel your day! 🚀
          </p>
          <div className="flex w-max  gap-6 md:gap-10 mt-2 md:mt-6 ">
            <button onClick={()=> navigate('/menu')} className="px-3 py-1 md:px-6 md:py-2 text-sm  bg-red-950 text-white rounded-md md:rounded-lg ">Menu</button>
            <button onClick={()=> navigate('/Orders')} className="px-3 py-1 text-sm bg-red-950 text-white rounded-md md:rounded-lg ">Order Now</button>
          </div>
          
        </div>
        {/* Image */}
        
        <div className='md:w-5/6 flex flex-row-reverse justify-center md:gap-20 '>
          <img className="h-36  md:h-80 pt-1 md:mt-4 " src={LogoIcon} alt='' />
          <img 
            className="h-36 md:h-80 pt-1 md:mt-4 animate-[spin_25s_linear_infinite] " 
            src={spinningPlate} 
            alt='' 
          />
          
        </div>
      </div>
    </section>

    )
  }
  
  export default Hero;
