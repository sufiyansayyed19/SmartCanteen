import { AiFillStar } from "react-icons/ai";
import useCartStore from "../store/cartStore";
import PropTypes from "prop-types";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
   const { addToCart, cart } = useCartStore();
   return (
      <div
         className="font-bold w-[10rem] md:w-[15.625rem] bg-white p-5 flex flex-col justify-between rounded-2xl gap-2 shadow-xl border-[1px]">
         <div className="flex  justify-center">
            <img
               src={img}
               alt=""
               className=" w-[6rem] h-[6rem] md:w-[8.75rem] md:h-[8.75rem]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out rounded-full"
            />
         </div>
         <div className="flex justify-between text-sm">
            <h2 className="text-xs md:text-[1rem]">{name}</h2>
            <span className="text-red-950 text-[0.7rem] md:text-[1rem] ">₹{price}</span>
         </div>
         <p className="text-xs md:text-sm font-normal">{desc.slice(0, 40)}...</p>
         <div className="flex justify-between ">
            <span className="flex items-center justify-center">
               <AiFillStar className="text-xs md:text-lg mr-1 text-red-950" /> <span className="text-xs md:text-md">{rating}
               </span>            </span>

            {/* Add to Cart */}
               <button
                  onClick={ async () => {
                     addToCart({ id, name, price, rating, img, status: "Due" });
                     handleToast(name);
                     console.log(cart);
                  }}
                  className="px-2 py-1 text-[0.625rem] rounded-md md:rounded-lg md:px-3 md:py-2 md:text-sm bg-red-950 text-white   hover:text-yellow-500">
                  Add to cart
               </button>
         </div>
      </div>
   );
   
};

FoodCard.propTypes = {
   id: PropTypes.number.isRequired,        // id must be a number and is required
   name: PropTypes.string.isRequired,      // name must be a string and required
   price: PropTypes.number.isRequired,     // price must be a number
   desc: PropTypes.string.isRequired,      // desc must be a string
   img: PropTypes.string.isRequired,       // img must be a string (URL)
   rating: PropTypes.number,              // rating must be a number (optional)
   handleToast: PropTypes.func.isRequired, // handleToast must be a function
};


export default FoodCard;
