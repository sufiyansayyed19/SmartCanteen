import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });

  // Simulate token check
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) navigate("/dashboard");
  // }, [navigate]);

  // Handle Input Change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
      alert("Please fill all fields");
      return;
    }

    // Simulating API response
    setTimeout(() => {
      localStorage.setItem("token", "sample_token");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-200 to-red-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-red-800">{isLogin ? "Welcome Back!" : "Create an Account"}</h2>
        
        <form onSubmit={handleSubmit} className="w-full mt-4">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input 
                type="text" name="username" placeholder="Username"
                className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                value={formData.username} onChange={handleChange}
              />
            </div>
          )}

          <div className="relative mt-3">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
              type="email" name="email" placeholder="Email"
              className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              value={formData.email} onChange={handleChange}
            />
          </div>

          <div className="relative mt-3">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input 
              type="password" name="password" placeholder="Password"
              className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              value={formData.password} onChange={handleChange}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded-md mt-4 hover:bg-red-800 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-700">
          {isLogin ? "New here?" : "Already have an account?"}  
          <span 
            className="text-red-700 font-bold cursor-pointer ml-1"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
