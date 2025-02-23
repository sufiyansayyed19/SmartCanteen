import { FaTrash } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import useCartStore from "../store/cartStore"; // Import Zustand store
import PropTypes from "prop-types";

const CartItems = ({ id, img, name, price, rating, qty }) => {
   const { removeFromCart, incrementQty, decrementQty } = useCartStore(); // Zustand actions

   return (
      <div className="shadow-md rounded-xl p-4 bg-white flex flex-col">
         <div className="flex items-center space-x-4 ml-2">
            <img
               className="w-20 h-24 object-cover rounded-lg"
               src={img}
               alt={name}
            />
            <div className="flex-1">
               <h3 className="text-lg font-semibold">{name}</h3>
               <div className="flex items-center space-x-1 text-yellow-500">
                  <AiFillStar />
                  <span className="font-medium">{rating}</span>
               </div>
               <p className="text-lg font-semibold">₹{price}</p>
            </div>
            {/* Remove from Cart */}
            <button
               onClick={() => removeFromCart(id)}
               className="text-red-500 hover:text-red-700"
            >
               <FaTrash size={18} />
            </button>
         </div>

         {/* Quantity Controls */}
         <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-start ">
               <button
                  onClick={() => qty > 1 && decrementQty(id)}
                  className="bg-yellow-500 text-white p-2 rounded-full"
               >
                  <FaMinus />
               </button>
               <span className="font-semibold px-3">{qty ? qty:1}</span>
               <button
                  onClick={() => incrementQty(id)}
                  className="bg-yellow-500 text-white p-2 rounded-full"
               >
                  <FaPlus />
               </button>
            </div>
         </div>
      </div>
   );
};

CartItems.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
 };
export default CartItems;
