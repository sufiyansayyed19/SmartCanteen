import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import PropTypes from 'prop-types';
const AdminProductCard = ({ product, onDelete, onEdit }) => {
  // Open delete confirmation modal
  const openDeleteModal = () => {
    onDelete(product);
  };

  const openEditModal = () => {
    onEdit(product);
  };  

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow w-full max-w-xs mx-auto h-80">
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-0 left-0 m-2">
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
            product.isVeg 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {product.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
        <div className="absolute top-0 right-0 m-2">
          <span className="inline-block px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <div className="flex items-center bg-yellow-100 px-2 py-0.5 rounded">
            <span className="text-yellow-700 font-medium text-xs">
              {product.rating}
            </span>
            <span className="text-yellow-500 ml-1">★</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.desc}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-800 font-bold">
            <BiRupee className="text-base" />
            <span>{product.price}</span>
          </div>
          
          <div className="flex space-x-1">
            <button 
              className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
              title="Edit Product"
              onClick={openEditModal}
            >
              <FiEdit size={16} />
            </button>
            <button 
              className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Delete Product"
              onClick={openDeleteModal}
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminProductCard.propTypes = {
    product: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isVeg: PropTypes.bool.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      desc: PropTypes.string,
      price: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  };
  
export default AdminProductCard;