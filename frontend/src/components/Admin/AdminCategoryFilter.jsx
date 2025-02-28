import { useState } from "react";
import PropTypes from 'prop-types';
import { FiFilter } from "react-icons/fi";

const AdminCategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Handle category selection for mobile view
  const handleMobileSelection = (category) => {
    setActiveCategory(category);
    setIsFilterMenuOpen(false);
  };

  return (
    <>
      {/* Category Filter - Desktop */}
      <div className="hidden md:flex items-center gap-2 space-x-1 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors ${
            activeCategory === "All"
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Category Filter - Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
        >
          <span className="flex items-center">
            <FiFilter className="mr-2" />
            {activeCategory}
          </span>
          <span className="text-gray-500">▼</span>
        </button>

        {isFilterMenuOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border overflow-hidden">
            <button
              onClick={() => handleMobileSelection("All")}
              className={`w-full px-4 py-2 text-left ${
                activeCategory === "All"
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-gray-50"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleMobileSelection(category)}
                className={`w-full px-4 py-2 text-left ${
                  activeCategory === category
                    ? "bg-orange-100 text-orange-700"
                    : "hover:bg-gray-50"
                }`}
              >
                {category}
                {/* {console.log(category)} */}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

// Prop validation
AdminCategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default AdminCategoryFilter;
