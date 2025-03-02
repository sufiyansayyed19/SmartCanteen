import { useEffect, useState } from 'react';
import LogoIcon from '../assets/chefWithFood.png';
import spinningPlate from '../assets/spinningPlate.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  // Food emojis for the animated text effect
  const foodEmojis = ["🍔", "🍕", "🍗", "🍲", "🥗", "🍣", "🍱", "🌮", "🍜", "🥪"];
  const [currentEmoji, setCurrentEmoji] = useState(0);
  
  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
    
    // Rotate through food emojis
    const emojiInterval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % foodEmojis.length);
    }, 2000);
    
    return () => clearInterval(emojiInterval);
  }, []);

  return (
    <section id="hero" className="w-full bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Hero Container */}
      <div className="container mx-auto px-4 py-12 md:py-10 md:min-h-[300px] flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className={`flex flex-col md:w-1/2  transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-2 md:space-y-4 flex flex-col items-center md:block">
            <h1 className="text-4xl md:text-5xl font-bold text-red-900 leading-tight">
              Craving something <span className="text-orange-500">delicious?</span>
            </h1>
            
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl lg:text-6xl font-bold mr-2 text-orange-500">
                {foodEmojis[currentEmoji]}
              </div>
              <p className="text-sm md:text-lg text-gray-700 max-w-md">
                Smart Canteen serves up fresh flavors, fast!<span className='hidden md:inline'><br></br></span>Taste the magic, fuel your day!
              </p>
            </div>
            
            <div className="bg-orange-200 rounded-lg p-3 mt-4 max-w-md">
              <div className="flex items-center ">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-3">
                  <span>!</span>
                </div>
                <p className="text-sm text-orange-800">
                  <span className="font-bold">Today&apos;s Special:</span> Order any combo meal and get a free beverage!
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-normal gap-4 mt-8 ">
            <button 
              onClick={() => navigate('/menu')} 
              className="px-6 py-3 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Menu
            </button>
            <button 
              onClick={() => navigate('/cart')} 
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Order Now
            </button>
          </div>
          
          <div className="flex items-center mt-8">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div className="h-8 w-8 rounded-full bg-gray-400"></div>
            </div>
            <p className="ml-4 text-sm text-gray-600">Join 2,000+ happy Students</p>
          </div>
        </div>
        
        {/* Right Content - Images */}
        <div className={`md:w-1/2 relative mt-10 md:mt-0 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 h-40 w-40 md:h-60 md:w-60 bg-orange-300 rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-10 left-10 h-20 w-20 bg-red-300 rounded-full opacity-20 -z-10"></div>
            
            {/* Main images with improved animations */}
            <div className="flex justify-center items-center">
            <img 
                className="h-48 md:h-96 animate-[spin_30s_linear_infinite]" 
                src={spinningPlate} 
                alt="Spinning plate with food"
              />
              <img 
                className="h-48 md:h-96 object-contain transform hover:scale-105 transition-transform duration-500 z-20" 
                src={LogoIcon} 
                alt="Chef with food"
              />
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#FED7AA" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;