import img34 from '../assets/Lunch/img1_DalRice.png';
import img35 from '../assets/Lunch/img2_RajmaChawal.jpeg';
import img36 from '../assets/Lunch/img3_PaneerButterMasala.jpeg';
import img37 from '../assets/Lunch/img4_CholeRice.jpeg';
import img38 from '../assets/Lunch/img5_MixVegRice.jpeg';
import img39 from '../assets/Lunch/img6_AlooPalakRice.jpeg';
import img40 from '../assets/Lunch/img7_DalFryRice.jpeg';
import img41 from '../assets/Lunch/img8_AlooMatarRice.jpeg';
import img42 from '../assets/Lunch/img9_VegPulao.jpeg';
import img43 from '../assets/Lunch/img10_KadiPakodaRice.jpeg';
import img44 from '../assets/Lunch/img11_ChickenCurryRice.jpeg';
import img45 from '../assets/Lunch/img12_ChickenBiryani.jpeg';
import img46 from '../assets/Lunch/img13_ChickenMasalaRice.jpeg';
import img47 from '../assets/Lunch/img14_ChickenFriedRice.jpeg';
import img48 from '../assets/Lunch/img15_ChickenCurryRoti.jpeg';

const Lunch = [
  // Vegetarian Items (34-43)
  {
    id: 34,
    img: img34,
    name: "Dal Rice",
    price: 80,
    desc: "Simple yellow dal with steamed rice, served with pickle and papad. A staple comfort meal perfect for students.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 35,
    img: img35,
    name: "Rajma Chawal",
    price: 90,
    desc: "Kidney beans curry cooked with onion-tomato gravy, served with steamed rice. A protein-rich lunch option.",
    category: "lunch",
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 36,
    img: img36,
    name: "Paneer Butter Masala",
    price: 110,
    desc: "Cottage cheese in creamy tomato gravy with rice or rotis. Premium vegetarian option.",
    category: "lunch",
    rating: 4.4,
    isVeg: true,
  },
  {
    id: 37,
    img: img37,
    name: "Chole Rice",
    price: 90,
    desc: "Chickpea curry served with steamed rice and onions. Rich in protein and filling.",
    category: "lunch",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 38,
    img: img38,
    name: "Mix Veg Rice",
    price: 85,
    desc: "Seasonal vegetables cooked in a simple gravy, served with rice. Daily vegetarian special.",
    category: "lunch",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 39,
    img: img39,
    name: "Aloo Palak Rice",
    price: 85,
    desc: "Potatoes and spinach curry served with rice. A healthy and economical vegetarian option.",
    category: "lunch",
    rating: 4.0,
    isVeg: true,
  },
  {
    id: 40,
    img: img40,
    name: "Dal Fry Rice",
    price: 85,
    desc: "Tempered yellow dal with jeera rice. Simple, nutritious and economical meal.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 41,
    img: img41,
    name: "Aloo Matar Rice",
    price: 85,
    desc: "Potato and peas curry with rice. Simple, filling vegetarian meal.",
    category: "lunch",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 42,
    img: img42,
    name: "Veg Pulao",
    price: 95,
    desc: "Rice cooked with mixed vegetables and mild spices. Served with raita. Light and healthy option.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 43,
    img: img43,
    name: "Kadi Pakoda Rice",
    price: 90,
    desc: "Yogurt-based curry with gram flour dumplings, served with rice. Wednesday special.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },

  // Non-Vegetarian Items (44-48)
  {
    id: 44,
    img: img44,
    name: "Chicken Curry Rice",
    price: 120,
    desc: "Basic chicken curry with steamed rice. Served with onion rings and pickle. Popular non-veg option.",
    category: "lunch",
    rating: 4.3,
    isVeg: false,
  },
  {
    id: 45,
    img: img45,
    name: "Chicken Biryani",
    price: 130,
    desc: "Aromatic rice cooked with chicken and basic spices. Served with raita. Thursday special.",
    category: "lunch",
    rating: 4.6,
    isVeg: false,
  },
  {
    id: 46,
    img: img46,
    name: "Chicken Masala Rice",
    price: 125,
    desc: "Spiced chicken curry with rice. Served with papad and pickle. Friday special.",
    category: "lunch",
    rating: 4.4,
    isVeg: false,
  },
  {
    id: 47,
    img: img47,
    name: "Chicken Fried Rice",
    price: 110,
    desc: "Chinese style fried rice with chicken. Served with chili sauce. Indo-Chinese option.",
    category: "lunch",
    rating: 4.5,
    isVeg: false,
  },
  {
    id: 48,
    img: img48,
    name: "Chicken Curry Roti",
    price: 115,
    desc: "Basic chicken curry served with 4 rotis. Alternative to rice-based meals.",
    category: "lunch",
    rating: 4.3,
    isVeg: false,
  },
];

export default Lunch;