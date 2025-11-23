import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { validateEmail, validatePassword, validateUsername } from "../utils/validators";
import toast from "react-hot-toast";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", username: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Simulate token check
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) navigate("/dashboard");
  // }, [navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin) {
      const usernameError = validateUsername(formData.username);
      if (usernameError) newErrors.username = usernameError;
    }
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    return newErrors;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);
    
    // Simulating API response
    setTimeout(() => {
      localStorage.setItem("token", "sample_token");
      toast.success(isLogin ? "Login successful!" : "Account created successfully!");
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-200 to-red-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-red-800">{isLogin ? "Welcome Back!" : "Create an Account"}</h2>
        
        <form onSubmit={handleSubmit} className="w-full mt-4">
          {!isLogin && (
            <div className="mb-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" name="username" placeholder="Username"
                  className={`w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.username ? 'border-red-500 focus:ring-red-400' : 'focus:ring-red-400'
                  }`}
                  value={formData.username} onChange={handleChange}
                />
              </div>
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
          )}

          <div className="mb-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input 
                type="email" name="email" placeholder="Email"
                className={`w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500 focus:ring-red-400' : 'focus:ring-red-400'
                }`}
                value={formData.email} onChange={handleChange}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input 
                type="password" name="password" placeholder="Password"
                className={`w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.password ? 'border-red-500 focus:ring-red-400' : 'focus:ring-red-400'
                }`}
                value={formData.password} onChange={handleChange}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-700 text-white py-2 rounded-md mt-4 hover:bg-red-800 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              isLogin ? "Login" : "Sign Up"
            )}
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
