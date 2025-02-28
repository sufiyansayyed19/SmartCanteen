import img1 from '../assets/TodaySpecial/img1_FrieswithCoke.jpeg';
import img2 from '../assets/TodaySpecial/img2_SandwichwithFries.jpeg';
import img3 from '../assets/TodaySpecial/img3_samosaPav.jpeg';
import img4 from '../assets/TodaySpecial/img4_masalaDosa.jpeg';
import img5 from '../assets/TodaySpecial/img5_DalRice.png';
import img6 from '../assets/TodaySpecial/img6_GulabJamun.jpeg';
import img7 from '../assets/TodaySpecial/img7_WatermelonJuice.jpeg';
import img8 from '../assets/TodaySpecial/img8_RedVelvetCupcake.jpeg';

const TodaySpecial = [
  {
    id: 1,
    img: img1,
    name: "Fries with Coke",
    price: 120,
    desc: "Crispy golden fries served with a chilled glass of coke. Perfect snack combo.",
    category: "today's special",
    rating: 4.5,
    isVeg: true, // Added isVeg property
  },
  {
    id: 2,
    img: img2,
    name: "Sandwich with Fries",
    price: 140,
    desc: "Grilled sandwich with fresh veggies and crispy fries. A light and tasty combo.",
    category: "today's special",
    rating: 4.3,
    isVeg: true, // Added isVeg property
  },
  {
    id: 3,
    img: img3,
    name: "Samosa Pav",
    price: 50,
    desc: "Spicy samosa served in a pav (bread) with chutney. A Mumbai street food favorite.",
    category: "today's special",
    rating: 4.6,
    isVeg: true, // Added isVeg property
  },
  {
    id: 4,
    img: img4,
    name: "Masala Dosa",
    price: 120,
    desc: "Crispy South Indian crepe filled with spiced potatoes, served with sambar and chutney.",
    category: "today's special",
    rating: 4.7,
    isVeg: true, // Added isVeg property
  },
  {
    id: 5,
    img: img5,
    name: "Dal Rice",
    price: 80,
    desc: "Simple yellow dal with steamed rice, served with pickle and papad. A staple comfort meal.",
    category: "today's special",
    rating: 4.2,
    isVeg: true, // Added isVeg property
  },
  {
    id: 6,
    img: img6,
    name: "Gulab Jamun",
    price: 15,
    desc: "Soft and syrupy gulab jamun, a classic Indian sweet. Served warm.",
    category: "today's special",
    rating: 4.7,
    isVeg: true, // Added isVeg property
  },
  {
    id: 7,
    img: img7,
    name: "Watermelon Juice",
    price: 55,
    desc: "Cool and hydrating juice made from fresh watermelon. Ideal for hot days.",
    category: "today's special",
    rating: 4.6,
    isVeg: true, // Added isVeg property
  },
  {
    id: 8,
    img: img8,
    name: "Red Velvet Cupcake",
    price: 30,
    desc: "A single red velvet cupcake with cream cheese frosting. A delightful indulgence.",
    category: "today's special",
    rating: 4.6,
    isVeg: false, // Added isVeg property
  },
];

export default TodaySpecial;
