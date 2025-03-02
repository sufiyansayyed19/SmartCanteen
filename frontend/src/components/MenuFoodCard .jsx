import { AiFillStar } from "react-icons/ai";
import useCartStore from "../store/cartStore";
import PropTypes from "prop-types";

const MenuFoodCard = ({ _id, name, price, desc, img, rating, handleToast }) => { // Changed id to _id
  const { addToCart, cart } = useCartStore();

  return (
    <div className="font-bold w-[8rem] md:w-[12rem] bg-white p-2 md:p-4 flex flex-col justify-between rounded-2xl gap-1.5 shadow-xl border-[1px]">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={img}
          alt={name}
          className="w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out rounded-full"
        />
      </div>

      {/* Name and Price */}
      <div className="flex justify-between text-xs">
        <h2 className="text-[0.7rem] md:text-[0.9rem]">{name}</h2>
        <span className="text-red-950 text-[0.7rem] md:text-[0.9rem]">₹{price}</span>
      </div>

      {/* Description */}
      <p className="text-[0.6rem] md:text-[0.7rem] font-normal text-gray-600">
        {desc.slice(0, 30)}...
      </p>

      {/* Rating and Add to Cart Button */}
      <div className="flex justify-between items-center">
        {/* Rating */}
        <span className="flex items-center">
          <AiFillStar className="text-[0.6rem] md:text-[0.8rem] text-red-950 mr-1" />
          <span className="text-[0.6rem] md:text-[0.8rem]">{rating}</span>
        </span>

        {/* Add to Cart Button */}
        <button
          onClick={async () => {
            addToCart({ _id, name, price, rating, img, status: "Due" }); // Changed id to _id
            handleToast(name);
            console.log(cart);
          }}
          className="px-2 py-1 text-[0.5rem] md:text-[0.6rem] rounded-md bg-red-950 text-white hover:text-yellow-500 transition-colors duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

MenuFoodCard.propTypes = {
  _id: PropTypes.string.isRequired, // Changed id to _id and updated to string
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
  handleToast: PropTypes.func.isRequired,
};

export default MenuFoodCard;