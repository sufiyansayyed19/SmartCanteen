import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload, MdFastfood, MdAttachMoney, MdDescription, MdCategory, MdStar, MdCheck } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import useAdminStore from "../../store/adminStore";

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const { addProduct } = useAdminStore();
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    category: "breakfast",
    rating: "4.0",
    isVeg: true,
    img: null
  });

  // Categories for the dropdown
  const categories = ["today's special","combo", "breakfast", "lunch", "dinner", "chips", "biscuits", "drink", "juice", "sweet"];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        img: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
    
    // Validate form
    if (!formData.name || !formData.price || !formData.desc || !formData.img) {
      setErrorMessage("Please fill all required fields and upload an image");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call to add product
    setTimeout(() => {
      // Create a new product object
      const newProduct = {
        id: Date.now(), // Generate temporary ID
        name: formData.name,
        price: parseFloat(formData.price),
        desc: formData.desc,
        category: formData.category,
        rating: parseFloat(formData.rating),
        isVeg: formData.isVeg,
        // In a real app, you would upload the image to a server and get a URL back
        img: imagePreview
      };
      
      console.log("Product added:", newProduct);
      addProduct (newProduct); 
      // Show success message
      setSuccessMessage("Product added successfully!");
      
      // Reset form
      setFormData({
        name: "",
        price: "",
        desc: "",
        category: "breakfast",
        rating: "4.0",
        isVeg: true,
        img: null
      });
      setImagePreview(null);
      
      setIsSubmitting(false);
      
      // Redirect after short delay
      // setTimeout(() => navigate("/admin/products"), 2000);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 text-white p-6">
          <h1 className="text-2xl font-bold flex items-center">
            <MdFastfood className="mr-2 text-orange-400" /> Add New Product
          </h1>
          <p className="text-gray-300 mt-1">
            Fill in the details below to add a new food item to the menu
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Success/Error Messages */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
              <MdCheck className="text-xl mr-2" /> {successMessage}
            </div>
          )}
          
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
              <FiAlertCircle className="text-xl mr-2" /> {errorMessage}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdFastfood className="mr-2" /> Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rava Idli"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              
              {/* Price */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdAttachMoney className="mr-2" /> Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g. 85"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              {/* Category */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdCategory className="mr-2" /> Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Rating */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdStar className="mr-2 text-yellow-500" /> Initial Rating
                </label>
                <div className="flex items-center">
                  <input
                    type="range"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    min="1.0"
                    max="5.0"
                    step="0.1"
                    className="w-full mr-4"
                  />
                  <span className="text-lg font-semibold bg-gray-100 px-2 py-1 rounded">
                    {formData.rating}
                  </span>
                </div>
              </div>
              
              {/* Veg/Non-Veg Toggle */}
              <div className="mt-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isVeg"
                    checked={formData.isVeg}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="flex items-center">
                    <span className={`h-5 w-5 rounded-full ${formData.isVeg ? 'bg-green-600' : 'bg-red-600'} mr-2`}></span>
                    <span className="text-gray-700 font-semibold">
                      {formData.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                  </span>
                </label>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdCloudUpload className="mr-2" /> Product Image *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-48 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({...formData, img: null});
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => document.getElementById("productImage").click()}
                      className="cursor-pointer py-8"
                    >
                      <MdCloudUpload className="mx-auto text-4xl text-gray-400" />
                      <p className="text-gray-500 mt-2">Click to upload image</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG or WEBP (Max 2MB)</p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="productImage"
                    onChange={handleImageUpload}
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                  />
                </div>
              </div>
              
              {/* Description */}
              <div>
                <label className=" text-gray-700 font-semibold mb-2 flex items-center">
                  <MdDescription className="mr-2" /> Description *
                </label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  placeholder="Describe the food item..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProduct;