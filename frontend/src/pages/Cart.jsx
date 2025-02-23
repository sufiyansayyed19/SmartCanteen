import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import useCartStore from "../store/cartStore"; // Zustand store
import CartItems from "../components/CartItems";
import PaymentMethod from "../components/PaymentMethod";



const Cart = () => {
   const cartItems = useCartStore((state) => state.cart);
   // Calculate Total Price
   const totalPrice = cartItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
   );

   return (
      <>
         <div className="flex flex-col min-h-full max-w-3xl mt-7 mx-auto md:space-y-4 ">
            <div className=" flex justify-between px-5 md:mt-3 ">
               <div className="flex items-center">
                  <div className="mr-2 md:mr-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
                  <h2 className="text-xl md:text-3xl font-bold text-red-950 ">Your cart</h2>
                  <div className="ml-2 md:ml-3 h-[2px] w-8 md:w-20 bg-gray-400"></div>
               </div>
               <Link to={"/menu"}>
                     <button
                        type="button"
                        className="px-3 py-1 md:px-6 md:py-2 text-sm  bg-red-950 text-white rounded-md ">
                        Back to Menu
                     </button>
               </Link>
               
            </div>

            
            <div className="mt-3">
               <Scrollbars style={{ height: 550 }}>
                  {cartItems.length > 0 ? (
                     cartItems.slice().reverse().map((food) => (
                        <CartItems
                           key={food.id}
                           id={food.id}
                           name={food.name}
                           price={food.price}
                           img={food.img}
                           rating={food.rating}
                           qty={food.qty}
                        />
                     ))
                  ) : (
                     <h1 className="flex justify-center text-3xl font-bold">
                        Oop! your Cart is Empty
                     </h1>
                  )}
               </Scrollbars>
            </div>

            <div className="px-4 md:px-8 mt-5">
               {/* Total Price */}
               <div className=" text-lg text-right md:my-2">
                  <p className="font-semibold">
                     Total amount:   
                     <span className="font-semibold">  ₹{totalPrice}</span>
                  </p>
               </div>
               <div className="flex justify-between items-center space-x-4">
                  <PaymentMethod/>
                  <Link to={"/success"}>
                        <button
                           type="button"
                           className=" mt-3 px-5  py-1 md:px-6 md:py-2 text-sm  bg-red-950 hover:text-yellow-300 text-white rounded-md md:rounded-lg">
                           Pay
                        </button>
                  </Link>    
               </div>
            </div>
         </div>
      </>
   );
};

export default Cart;
