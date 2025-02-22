import toast, { Toaster } from "react-hot-toast";
import FoodCard from "./FoodCard";
import Breakfast from "../data/Breakfast";



const FoodItems = () => {
   const handleToast = (name) => toast.success(` added ${name} to cart`);

   return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
         <div className="my-5">
            <span className="flex items-center justify-center lg:w-full lg:h[100vw] lg:my-14">
               <h1 className="text-2xl font-bold lg:text-5xl">
                  Find the <span className="font-serif text-yellow">Best</span>{" "}
                  food
               </h1>
            </span>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10  md:mx-20">
               {Breakfast.sort(() => Math.random() - 0.5)
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
      </>
   );
};

export default FoodItems;
