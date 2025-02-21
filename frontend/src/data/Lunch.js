import img1 from '../assets/Lunch/img1_DalRice.png';
import img2 from '../assets/Lunch/img2_RajmaChawal.jpeg';
import img3 from '../assets/Lunch/img3_PaneerButterMasala.jpeg';
import img4 from '../assets/Lunch/img4_CholeRice.jpeg';
import img5 from '../assets/Lunch/img5_MixVegRice.jpeg';
import img6 from '../assets/Lunch/img6_AlooPalakRice.jpeg';
import img7 from '../assets/Lunch/img7_DalFryRice.jpeg';
import img8 from '../assets/Lunch/img8_AlooMatarRice.jpeg';
import img9 from '../assets/Lunch/img9_VegPulao.jpeg';
import img10 from '../assets/Lunch/img10_KadiPakodaRice.jpeg';
import img11 from '../assets/Lunch/img11_ChickenCurryRice.jpeg';
import img12 from '../assets/Lunch/img12_ChickenBiryani.jpeg';
import img13 from '../assets/Lunch/img13_ChickenMasalaRice.jpeg';
import img14 from '../assets/Lunch/img14_ChickenFriedRice.jpeg';
import img15 from '../assets/Lunch/img15_ChickenCurryRoti.jpeg';

const Lunch = [
  // Vegetarian Items (1-10)
  {
    id: 1,
    img: img1,
    name: "Dal Rice",
    price: 80,
    desc: "Simple yellow dal with steamed rice, served with pickle and papad. A staple comfort meal perfect for students.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 2,
    img: img2,
    name: "Rajma Chawal",
    price: 90,
    desc: "Kidney beans curry cooked with onion-tomato gravy, served with steamed rice. A protein-rich lunch option.",
    category: "lunch",
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 3,
    img: img3,
    name: "Paneer Butter Masala",
    price: 110,
    desc: "Cottage cheese in creamy tomato gravy with rice or rotis. Premium vegetarian option.",
    category: "lunch",
    rating: 4.4,
    isVeg: true,
  },
  {
    id: 4,
    img: img4,
    name: "Chole Rice",
    price: 90,
    desc: "Chickpea curry served with steamed rice and onions. Rich in protein and filling.",
    category: "lunch",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 5,
    img: img5,
    name: "Mix Veg Rice",
    price: 85,
    desc: "Seasonal vegetables cooked in a simple gravy, served with rice. Daily vegetarian special.",
    category: "lunch",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 6,
    img: img6,
    name: "Aloo Palak Rice",
    price: 85,
    desc: "Potatoes and spinach curry served with rice. A healthy and economical vegetarian option.",
    category: "lunch",
    rating: 4.0,
    isVeg: true,
  },
  {
    id: 7,
    img: img7,
    name: "Dal Fry Rice",
    price: 85,
    desc: "Tempered yellow dal with jeera rice. Simple, nutritious and economical meal.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 8,
    img: img8,
    name: "Aloo Matar Rice",
    price: 85,
    desc: "Potato and peas curry with rice. Simple, filling vegetarian meal.",
    category: "lunch",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 9,
    img: img9,
    name: "Veg Pulao",
    price: 95,
    desc: "Rice cooked with mixed vegetables and mild spices. Served with raita. Light and healthy option.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 10,
    img: img10,
    name: "Kadi Pakoda Rice",
    price: 90,
    desc: "Yogurt-based curry with gram flour dumplings, served with rice. Wednesday special.",
    category: "lunch",
    rating: 4.2,
    isVeg: true,
  },

  // Non-Vegetarian Items (11-15)
  {
    id: 11,
    img: img11,
    name: "Chicken Curry Rice",
    price: 120,
    desc: "Basic chicken curry with steamed rice. Served with onion rings and pickle. Popular non-veg option.",
    category: "lunch",
    rating: 4.3,
    isVeg: false,
  },
  {
    id: 12,
    img: img12,
    name: "Chicken Biryani",
    price: 130,
    desc: "Aromatic rice cooked with chicken and basic spices. Served with raita. Thursday special.",
    category: "lunch",
    rating: 4.6,
    isVeg: false,
  },
  {
    id: 13,
    img: img13,
    name: "Chicken Masala Rice",
    price: 125,
    desc: "Spiced chicken curry with rice. Served with papad and pickle. Friday special.",
    category: "lunch",
    rating: 4.4,
    isVeg: false,
  },
  {
    id: 14,
    img: img14,
    name: "Chicken Fried Rice",
    price: 110,
    desc: "Chinese style fried rice with chicken. Served with chili sauce. Indo-Chinese option.",
    category: "lunch",
    rating: 4.5,
    isVeg: false,
  },
  {
    id: 15,
    img: img15,
    name: "Chicken Curry Roti",
    price: 115,
    desc: "Basic chicken curry served with 4 rotis. Alternative to rice-based meals.",
    category: "lunch",
    rating: 4.3,
    isVeg: false,
  },
];

export default Lunch;