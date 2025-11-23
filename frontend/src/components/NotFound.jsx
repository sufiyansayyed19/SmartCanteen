import { Link } from 'react-router-dom';
import { BiSad } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl md:text-[12rem] font-bold text-orange-600 opacity-20">404</h1>
        
        {/* Sad Icon */}
        <div className="flex justify-center -mt-20 mb-8">
          <BiSad className="text-8xl text-orange-500 animate-bounce" />
        </div>
        
        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Looks like this dish isn&apos;t on our menu! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
              <MdHome className="text-xl" />
              Back to Home
            </button>
          </Link>
          <Link to="/menu">
            <button className="px-6 py-3 bg-white text-orange-600 border-2 border-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              View Menu
            </button>
          </Link>
        </div>
        
        {/* Decorative food emojis */}
        <div className="mt-12 text-4xl space-x-4">
          <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>🍕</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>🍔</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>🍗</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>🍜</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
