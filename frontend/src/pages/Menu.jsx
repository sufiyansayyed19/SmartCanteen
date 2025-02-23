import { useState } from "react";
// import { Link } from "react-router-dom";

// Dummy data for menu items
const menuItems = [
  {
    id: 1,
    name: "Masala Dosa",
    price: 120,
    img: "https://example.com/masala-dosa.jpg",
    category: "Breakfast",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 180,
    img: "https://example.com/paneer-butter-masala.jpg",
    category: "Lunch",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 200,
    img: "https://example.com/chicken-biryani.jpg",
    category: "Lunch",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    price: 150,
    img: "https://example.com/veg-fried-rice.jpg",
    category: "Dinner",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Gulab Jamun",
    price: 50,
    img: "https://example.com/gulab-jamun.jpg",
    category: "Dessert",
    rating: 4.7,
  },
];

const Menu = () => {
  const [filters, setFilters] = useState({
    category: "All", // Default: Show all categories
  });

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Filtered items based on selected category
  const filteredItems =
    filters.category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filters.category);

  return (
    <div className="flex min-h-screen bg-gray-50 p-6">
      {/* Filters Section (Left Side) */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        {/* Add more filters here if needed */}
      </div>

      {/* Items Section (Right Side) */}
      <div className="w-3/4 ml-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Menu</h1>

        {/* Display Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-2">₹{item.price}</p>
              <p className="text-gray-600 mb-4">{item.category}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐ {item.rating}</span>
              </div>
              <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;