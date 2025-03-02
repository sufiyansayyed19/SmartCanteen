import toast from "react-hot-toast";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion";

// Food datas (updated with _id)
import TodaySpecial from "../data/TodaySpecial";
import Combos from '../data/Combos';
import Breakfast from "../data/Breakfast";
import Lunch from "../data/Lunch";
import Snacks from "../data/Chips";
import Drinks from '../data/Drinks';
import Sweets from '../data/Sweets';

const HomeItems = () => {
   const handleToast = (name) => toast.success(`added ${name} to cart`);

   const subHeadings = ["🍽️ Combos 🍽️", "🍽️ Breakfast 🍽️", "🍽️ Lunch 🍽️", "🍽️ Snacks 🍽️", "🍽️ Drinks 🍽️", "🍽️ Sweets 🍽️"];
   const FoodData = [Combos, Breakfast, Lunch, Snacks, Drinks, Sweets];

   console.log("TodaySpecial:", JSON.stringify(TodaySpecial, null, 2));
  console.log("TodaySpecial IDs:", TodaySpecial.map((item) => item._id));
   return (
      <>
         <div className="my-1">
            <div className="flex items-center justify-center my-6 md:my-7">
               <div className="h-[2px] w-8 md:w-16 bg-orange-300"></div>
               <h2 className="text-xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-red-400 to-red-900 text-transparent bg-clip-text drop-shadow-lg mx-3 animate-pulse">
                  🔥 Today&apos;s Special Offers 🔥
               </h2>
               <div className="h-[2px] w-8 md:w-16 bg-orange-300"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 md:mx-20">
               <motion.div
                  className="flex flex-wrap justify-center gap-3 md:gap-10 md:mx-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                  {TodaySpecial.slice(0, 4).map((food) => (
                     <FoodCard
                        key={food._id} // Changed id to _id
                        _id={food._id} // Changed id to _id
                        name={food.name}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                        img={food.img}
                        handleToast={handleToast}
                     />
                  ))}
               </motion.div>
            </div>

            {FoodData.map((category, index) => (
               <div key={index}>
                  <div className="flex items-center justify-center my-6 md:my-7">
                     <div className="h-[2px] w-20 bg-gray-400"></div>
                     <h1 className="text-xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-red-400 to-red-900 text-transparent bg-clip-text drop-shadow-lg mx-3 animate-pulse">
                        {subHeadings[index]}
                     </h1>
                     <div className="h-[2px] w-20 bg-gray-400"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-10 md:mx-20">
                     <motion.div
                        className="flex flex-wrap justify-center gap-3 md:gap-10 md:mx-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                     >
                        {category
                           .sort(() => Math.random() - 0.5)
                           .slice(0, 4)
                           .map((food) => (
                              <FoodCard
                                 key={food._id} // Changed id to _id
                                 _id={food._id} // Changed id to _id
                                 name={food.name}
                                 price={food.price}
                                 desc={food.desc}
                                 rating={food.rating}
                                 img={food.img}
                                 handleToast={handleToast}
                              />
                           ))}
                     </motion.div>
                  </div>
               </div>
            ))}
            <div className="mb-7">
               {/* margin div */}
            </div>
         </div>
      </>
   );
};

export default HomeItems;