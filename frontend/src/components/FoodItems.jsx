import toast, { Toaster } from "react-hot-toast";
import FoodCard from "./FoodCard";

//Food datas
import TodaySpecial from "../data/TodaySpecial";
import Combos from '../data/Combos';
import Breakfast from "../data/Breakfast";
import Lunch from "../data/Lunch";
import Snacks from "../data/Breakfast";
import Drinks from '../data/Drinks';
import Sweets from '../data/Sweets';


const FoodItems = () => {
   const handleToast = (name) => toast.success(` added ${name} to cart`);

   const subHeadings = ["🍽️ Combos 🍽️", "🍽️ Breakfast 🍽️", "🍽️ Lunch 🍽️", "🍽️ Snacks 🍽️", "🍽️ Drinks 🍽️", "🍽️ Sweets 🍽️"];
   const FoodData = [Combos, Breakfast, Lunch, Snacks, Drinks, Sweets];




   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="my-1">
            <div className="flex items-center justify-center my-6 md:my-7 ">
                  <div className="h-[2px] w-20 bg-gray-400"></div>
                  <h1 className="text-xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-red-700 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg mx-3 animate-pulse">
                  🍽️ Today&apos;s Special 🍽️
                  </h1>
                  <div className="h-[2px] w-20 bg-gray-400"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10  md:mx-20">
               {TodaySpecial.slice(0,4).map((food) => (
                     <FoodCard
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
            {FoodData.map((category, index) => (
               <div key={index}>
                  <div className="flex items-center justify-center my-6 md:my-7 ">
                     <div className="h-[2px] w-20 bg-gray-400"></div>
                     <h1 className="text-xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-red-400 to-red-900 text-transparent bg-clip-text drop-shadow-lg mx-3 animate-pulse">
                     {subHeadings[index]}
                     </h1>
                     <div className="h-[2px] w-20 bg-gray-400"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-10 md:mx-20">
                     {category
                     .sort(() => Math.random() - 0.5)
                     .slice(0, 4)
                     .map((food) => (
                        <FoodCard
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
               ))}

         </div>
      </>
   );
};

export default FoodItems;
