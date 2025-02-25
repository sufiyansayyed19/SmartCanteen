import { useState } from "react";
import toast from "react-hot-toast";
import {
  Breakfast,
  Biscuits,
  Chips,
  Combos,
  Dinner,
  Drinks,
  FoodData,
  IndianFood,
  Juices,
  Lunch,
  NavbarData,
  Sweets,
  TodaySpecial,
} from "../data";

import MenuFoodCard from "../components/MenuFoodCard ";
import FoodCard from "../components/FoodCard";

const Menu = () => {
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
    <div className="min-h-screen bg-red-50 md:p-6  p-6 pt-2">
      <div className="flex flex-col md:flex-row w-full">
        {/* Filters Section (Left Side) */}
        <div className="w-full md:w-1/4 bg-white md:p-6  p-6 pt-4 rounded-lg shadow-md  md:mb-0 md:mr-6 lg:h-screen">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-5">Filters</h2>

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
        <div className="w-full">
          <div className="flex items-center justify-center my-4">
            <div className="mr-2 md:mr-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
            <h2 className="text-xl md:text-3xl font-bold text-red-950">Menu</h2>
            <div className="ml-2 md:ml-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
          </div>

          {/* Display Items */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-10 mx-3 md:mx-10">
            {filteredItems.map((food) => (
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