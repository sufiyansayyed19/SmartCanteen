import img1 from '../assets/Dinner/img1_RotiDal.png';
import img2 from '../assets/Dinner/img2_PaneerParatha.jpeg';
import img3 from '../assets/Dinner/img3_MixVegRoti.png';
import img4 from '../assets/Dinner/img4_PalakRiceBowl.jpeg';
import img5 from '../assets/Dinner/img5_VegKhichdi.jpeg';
import img6 from '../assets/Dinner/img6_CholeKulcha.jpeg';
import img7 from '../assets/Dinner/img7_AlooJeeraRice.jpeg';
import img8 from '../assets/Dinner/img8_VegFriedRice.jpeg';
import img9 from '../assets/Dinner/img9_DalKhichdi.jpeg';
import img10 from '../assets/Dinner/img10_VegThali.jpeg';
import img11 from '../assets/Dinner/img11_ChickenRoti.jpeg';
import img12 from '../assets/Dinner/img12_ChickenPulao.jpeg';
import img13 from '../assets/Dinner/img13_ButterChickenBowl.jpeg';
import img14 from '../assets/Dinner/img14_ChickenFriedRiceCombo.jpeg';
import img15 from '../assets/Dinner/img15_ChickenThali.jpeg';

const Dinner = [
  // Vegetarian Items (1-10)
  {
    id: 1,
    img: img1,
    name: "Roti Dal",
    price: 70,
    desc: "4 fresh rotis served with yellow dal tadka. Light and nutritious dinner option with basic salad.",
    category: "dinner",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 2,
    img: img2,
    name: "Paneer Paratha",
    price: 95,
    desc: "2 stuffed parathas with cottage cheese filling, served with curd and pickle. Wholesome dinner option.",
    category: "dinner",
    rating: 4.4,
    isVeg: true,
  },
  {
    id: 3,
    img: img3,
    name: "Mix Veg Roti",
    price: 80,
    desc: "4 rotis with mixed vegetable curry. Balanced meal with seasonal vegetables and basic salad.",
    category: "dinner",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 4,
    img: img4,
    name: "Palak Rice Bowl",
    price: 85,
    desc: "Spinach rice served with raita. Light and nutritious dinner option rich in iron.",
    category: "dinner",
    rating: 4.0,
    isVeg: true,
  },
  {
    id: 5,
    img: img5,
    name: "Veg Khichdi",
    price: 75,
    desc: "Rice and lentils cooked together with vegetables. Served with papad and pickle. Easy to digest dinner.",
    category: "dinner",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 6,
    img: img6,
    name: "Chole Kulcha",
    price: 90,
    desc: "2 butter kulchas served with chickpea curry. Popular North Indian dinner combination.",
    category: "dinner",
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 7,
    img: img7,
    name: "Aloo Jeera Rice",
    price: 80,
    desc: "Cumin rice with potato curry. Simple and satisfying dinner option with papad.",
    category: "dinner",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 8,
    img: img8,
    name: "Veg Fried Rice",
    price: 85,
    desc: "Chinese style fried rice with vegetables. Served with manchurian sauce. Indo-Chinese option.",
    category: "dinner",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 9,
    img: img9,
    name: "Dal Khichdi",
    price: 75,
    desc: "Comfort meal of rice and lentils. Served with papad and pickle. Light on stomach.",
    category: "dinner",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 10,
    img: img10,
    name: "Veg Thali",
    price: 110,
    desc: "Complete meal with 4 rotis, dal, sabzi, rice, and dessert. Full dinner option.",
    category: "dinner",
    rating: 4.6,
    isVeg: true,
  },

  // Non-Vegetarian Items (11-15)
  {
    id: 11,
    img: img11,
    name: "Chicken Roti",
    price: 115,
    desc: "4 rotis with chicken curry. Served with onion and basic salad. Standard non-veg dinner.",
    category: "dinner",
    rating: 4.4,
    isVeg: false,
  },
  {
    id: 12,
    img: img12,
    name: "Chicken Pulao",
    price: 120,
    desc: "Mildly spiced rice with chicken pieces. Served with raita. Lighter than biryani.",
    category: "dinner",
    rating: 4.3,
    isVeg: false,
  },
  {
    id: 13,
    img: img13,
    name: "Butter Chicken Bowl",
    price: 130,
    desc: "Rich chicken curry served with 3 butter rotis. Premium dinner option.",
    category: "dinner",
    rating: 4.7,
    isVeg: false,
  },
  {
    id: 14,
    img: img14,
    name: "Chicken Fried Rice Combo",
    price: 125,
    desc: "Chinese style chicken fried rice with manchurian sauce and soup.",
    category: "dinner",
    rating: 4.5,
    isVeg: false,
  },
  {
    id: 15,
    img: img15,
    name: "Chicken Thali",
    price: 140,
    desc: "Complete meal with chicken curry, 4 rotis, dal, rice, and dessert. Full dinner option.",
    category: "dinner",
    rating: 4.8,
    isVeg: false,
  },
];

export default Dinner;