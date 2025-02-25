import { useState } from "react";
import toast from "react-hot-toast";
import { Breakfast, Biscuits, Chips, Combos, Dinner, Drinks, Juices, Lunch, NavbarData, Sweets, TodaySpecial } from "../data";
import MenuFoodCard from "../components/MenuFoodCard ";

const Menu = () => {

  const subHeadings = ["🔥 Today's Special 🔥", "🍱 Combos 🍱", "🍳 Breakfast 🍳", "🍲 Lunch 🍲", "🥩 Dinner 🥩", "🍟 Chips 🍟", "🍪 Biscuits 🍪", "🥤 Drinks 🥤", "🧃 Juices 🧃", "🍰 Sweets 🍰"];

  const FoodData = [TodaySpecial, Combos, Breakfast, Lunch, Dinner, Chips, Biscuits, Drinks, Juices, Sweets];





  const [filters, setFilters] = useState({
    category: "All", // Default: Show all categories
  });

  const handleToast = (name) => toast.success(`Added ${name} to cart`);

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
      ? Lunch
      : Lunch.filter((item) => item.category === filters.category);

  return (
    <div className="min-h-screen bg-red-50 md:p-6 p-6 pt-2">
      <div className="flex flex-col md:flex-row w-full">
        {/* Filters Section (Left Side) */}
        <div className="w-full md:w-[20rem] flex-shrink-0 bg-white md:p-6 p-6 pt-4 rounded-lg shadow-md md:mb-0 md:mr-6 lg:min-h-screen">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-5">
            Filters
          </h2>

          {/* Category Filter */}
          <div className="">
            <label className="block text-xs md:text-lg font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 text-sm md:text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="All">All</option>
              <option value="Breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Sweets">Dessert</option>
            </select>
          </div>

          {/* Add more filters here if needed */}
        </div>

        {/* Items Section (Right Side) */}
        <div className="flex-1 min-h-screen bg-red-50 p-6 pt-2">
          {/* Menu Header */}
          <div className="flex flex-col items-center justify-center md:mb-6">
            {/* Horizontal Lines and Gradient Text */}
            <div className="flex items-center justify-center mt-3 md:mt-0">
              <div className="h-[2px] w-8 md:w-16 bg-gray-400"></div>
              <h1 className="text-[1rem] md:text-2xl font-extrabold text-center bg-gradient-to-r from-orange-600 to-red-700 text-transparent bg-clip-text drop-shadow-lg mx-2 animate-pulse">
                🍴 Explore Our Menu 🍴
              </h1>
              <div className="h-[2px] w-8 md:w-16 bg-gray-400"></div>
            </div>
            
            {/* Subheading */}
            <p className="text-[0.6rem] md:text-sm text-gray-600 m-2 text-center">
              Discover a variety of delicious dishes crafted just for you!
            </p>
          </div>

          {/* Display Items */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 mx-3 md:mx-10">
            {filteredItems &&
              filteredItems.map((food) => (
                <MenuFoodCard
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  desc={food.desc}
                  rating={food.rating}
                  img={food.img}
                  handleToast={handleToast}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;