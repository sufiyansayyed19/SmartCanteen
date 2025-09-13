import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import useCartStore from "../store/cartStore"; // Zustand store
import CartItems from "../components/CartItems";
import PaymentMethod from "../components/PaymentMethod";
import toast from "react-hot-toast";
import useOrderStore from "../store/orderStore";
import useAppStore from "../store/appStore";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const { isPaymentChosen, setIsPaymentChosen } = useAppStore();
   const cartItems = useCartStore((state) => state.cartItems);
   const { setOrderItems } = useOrderStore();
   const { setCartItems } = useCartStore();
   const navigate = useNavigate();

   // Calculate Total Price
   const totalPrice = cartItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
   );

   const handlePayButton = () => {
      if (!isPaymentChosen) {
         toast.error("Please select a payment method");
      } else {
         setOrderItems(cartItems);
         setCartItems([]);
         setIsPaymentChosen(false);
         navigate('/orders');
      }
   };

   return (
      <>
         <div className="flex flex-col min-h-full max-w-3xl mt-7 mx-auto md:space-y-4 ">
            <div className="flex justify-between px-5 md:mt-3">
               <div className="flex items-center">
                  <div className="mr-2 md:mr-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
                  <h2 className="text-xl md:text-3xl font-bold text-red-950">Your cart</h2>
                  <div className="ml-2 md:ml-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
               </div>
               <Link to={"/menu"}>
                  <button
                     type="button"
                     className="px-3 py-1 md:px-6 md:py-2 text-sm bg-red-950 text-white rounded-md">
                     Back to Menu
                  </button>
               </Link>
            </div>

            <div className="mt-3">
               <Scrollbars style={{ height: 550 }}>
                  {cartItems.length > 0 ? (
                     cartItems.slice().reverse().map((food) => (
                        <CartItems
                           key={food._id} // Changed id to _id
                           _id={food._id} // Changed id to _id
                           name={food.name}
                           price={food.price}
                           img={food.img}
                           rating={food.rating}
                           qty={food.qty}
                        />
                     ))
                  ) : (
                     <div className="flex flex-col items-center justify-center p-8 text-center">
                        {/* Cart Icon */}
                        <div className="text-8xl mb-4">🛒</div>
                        {/* Funny Message */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                           Your cart is empty... just like my fridge!
                        </h2>
                        <p className="text-gray-600 mb-6">
                           Looks like you haven&apos;t added anything tasty yet. Don&apos;t worry, we&apos;ve got plenty of
                           delicious options waiting for you!
                        </p>
                        {/* CTA Button */}
                        <Link to="/menu">
                           <button
                              type="button"
                              className="px-6 py-2 bg-red-950 text-white rounded-lg hover:bg-red-900 transition duration-300"
                           >
                              Explore the Menu
                           </button>
                        </Link>
                     </div>
                  )}
               </Scrollbars>
            </div>
            {cartItems.length > 0 ? (
               <div className="px-4 md:px-8 mt-5">
                  {/* Total Price */}
                  <div className="text-lg text-right md:my-2">
                     <p className="font-semibold">
                        Total amount:   
                        <span className="font-semibold"> ₹{totalPrice}</span>
                     </p>
                  </div>
                  <div className="flex justify-between items-center space-x-4 mb-10">
                     <PaymentMethod />
                     <button
                        onClick={handlePayButton}
                        type="button"
                        className="mt-3 px-5 py-1 md:px-6 md:py-2 text-sm bg-red-950 hover:text-yellow-300 text-white rounded-md md:rounded-lg"
                     >
                        Pay
                     </button>
                  </div>
               </div>
            ) : null}
         </div>
      </>
   );
};

export default Cart;
