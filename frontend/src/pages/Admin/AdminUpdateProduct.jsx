import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import { MdOutlineEdit, MdFastfood } from "react-icons/md";
import useAdminStore from "../../store/adminStore";
import toast from "react-hot-toast";

const AdminUpdateProduct = () => {
  const { AllProducts, updateProduct } = useAdminStore();
  const { id } = useParams();
  const productId = id;
  const navigate = useNavigate();

  // State for the form
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    desc: "",
    category: "",
    isVeg: true,
    img: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  // Categories - same as in the products page
  const categories = [
    "today's special",
    "combo",
    "breakfast",
    "lunch",
    "dinner",
    "chips",
    "biscuits",
    "drink",
    "juice",
    "sweet",
  ];

  // Fetch product data when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundProduct = AllProducts.find((p) => p._id === productId);

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          toast.error("Product not found!");
          navigate("/admin/products");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Error loading product data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigate, AllProducts]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.desc || !product.category) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setIsLoading(true);
      await updateProduct(productId, product);
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setProduct((prev) => ({ ...prev, img: imageUrl }));
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center text-gray-800">
            <MdOutlineEdit className="mr-2 text-orange-500" />
            Edit Product
          </h1>
          <p className="text-gray-600 mt-1">Update product information</p>
        </div>
        <Link
          to="/admin/products"
          className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to Products
        </Link>
      </div>

      {/* Edit Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              {/* Product Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Product Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Price (₹)*
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  value={product.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Category*
                </label>
                <select
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Veg/Non-Veg Toggle */}
              <div className="mb-4">
                <span className="block text-gray-700 font-medium mb-2">
                  Food Type
                </span>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isVeg"
                      checked={product.isVeg === true}
                      onChange={() =>
                        setProduct((prev) => ({ ...prev, isVeg: true }))
                      }
                      className="form-radio text-green-500 focus:ring-green-500"
                    />
                    <span className="ml-2 text-green-600 font-medium">
                      Vegetarian
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isVeg"
                      checked={product.isVeg === false}
                      onChange={() =>
                        setProduct((prev) => ({ ...prev, isVeg: false }))
                      }
                      className="form-radio text-red-500 focus:ring-red-500"
                    />
                    <span className="ml-2 text-red-600 font-medium">
                      Non-Vegetarian
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Product Description */}
              <div className="mb-4">
                <label
                  htmlFor="desc"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Description*
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  value={product.desc}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>

              {/* Product Image */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Product Image
                </label>
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 border rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                    {product.img ? (
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <MdFastfood className="text-4xl text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      id="productImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="productImage"
                      className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg cursor-pointer transition-colors"
                    >
                      Change Image
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Recommended: 500x500px JPG, PNG or WebP (max 2MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 border-t pt-6 flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <FiSave className="mr-2" /> Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
