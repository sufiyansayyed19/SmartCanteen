import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiPlus } from "react-icons/fi";
import { MdOutlineRestaurantMenu, MdFastfood } from "react-icons/md";
import AdminProductCard from "../../components/Admin/AdminProductCard"; // Import the ProductCard component
import AdminCategoryFilter from "../../components/Admin/AdminCategoryFilter"; // Import the AdminCategoryFilter component
import AdminProductRemove from "../../components/Admin/AdminProductRemove"; // Updated import for AdminProductRemove
import useAdminStore from "../../store/adminStore";




const AdminProductsPage = () => {
  const navigate = useNavigate();
  const AllProduct = useAdminStore((state) => state.AllProducts)
  const [products, setProducts] = useState(AllProduct);
  // const categories = [
  //   "TodaySpecial", "Combos", "Breakfast", "Lunch", 
  //   "Dinner", "Chips", "Biscuits", "Drinks", "Juices", "Sweets"
  // ];
  
  const categories = ["Today's special", "Combo", "Breakfast", "Lunch", "Dinner", "Chips", "Biscuits", "Drink", "Juice", "Sweet"];





  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  useEffect(() => {
    let result = [...AllProduct];
    
    if (activeCategory !== "All") {
      result = result.filter(product => product.category === activeCategory.toLowerCase());
    }
    
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(lowercasedSearch) ||
          product.desc.toLowerCase().includes(lowercasedSearch) ||
          product.category.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredProducts(result);
  }, [AllProduct, activeCategory, searchTerm]);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    setShowRemoveModal(false);
  };

  const openRemoveModal = (product) => {
    setProductToRemove(product);
    setShowRemoveModal(true);
  };

  const closeRemoveModal = () => {
    setShowRemoveModal(false);
  };

  const handleEditProduct = (product) => {
    navigate(`/admin/edit-product/${product.id}`);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center text-gray-800">
            <MdOutlineRestaurantMenu className="mr-2 text-orange-500" /> 
            Products Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your canteen products catalog
          </p>
        </div>
        <Link 
          to="/admin/add-product" 
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
        >
          <FiPlus className="mr-2" /> Add New Product
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products by name, description or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Category Filter Component */}
          <AdminCategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <AdminProductCard 
              key={product.id} 
              product={product} 
              onRemove={openRemoveModal}  // Updated to use onRemove
              onEdit={handleEditProduct} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <MdFastfood className="text-5xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No products found
          </h3>
          <p className="text-gray-500 mb-4">
            {searchTerm 
              ? `No products match "${searchTerm}" in the ${activeCategory === "All" ? "catalog" : activeCategory + " category"}.` 
              : `No products available in the ${activeCategory} category.`}
          </p>
          {activeCategory !== "All" && (
            <button 
              onClick={() => setActiveCategory("All")}
              className="text-orange-500 hover:text-orange-700"
            >
              View all products
            </button>
          )}
        </div>
      )}

      {/* Remove Confirmation Modal Component */}
      <AdminProductRemove 
        isOpen={showRemoveModal}
        itemToRemove={productToRemove}
        onCancel={closeRemoveModal}
        onConfirm={handleRemoveProduct}  // Updated to handleRemoveProduct
      />
    </div>
  );
};

export default AdminProductsPage;
