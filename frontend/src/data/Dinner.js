import img49 from '../assets/Dinner/img1_RotiDal.png';
import img50 from '../assets/Dinner/img2_PaneerParatha.jpeg';
import img51 from '../assets/Dinner/img3_MixVegRoti.png';
import img52 from '../assets/Dinner/img4_PalakRiceBowl.jpeg';
import img53 from '../assets/Dinner/img5_VegKhichdi.jpeg';
import img54 from '../assets/Dinner/img6_CholeKulcha.jpeg';
import img55 from '../assets/Dinner/img7_AlooJeeraRice.jpeg';
import img56 from '../assets/Dinner/img8_VegFriedRice.jpeg';
import img57 from '../assets/Dinner/img9_DalKhichdi.jpeg';
import img58 from '../assets/Dinner/img10_VegThali.jpeg';
import img59 from '../assets/Dinner/img11_ChickenRoti.jpeg';
import img60 from '../assets/Dinner/img12_ChickenPulao.jpeg';
import img61 from '../assets/Dinner/img13_ButterChickenBowl.jpeg';
import img62 from '../assets/Dinner/img14_ChickenFriedRiceCombo.jpeg';
import img63 from '../assets/Dinner/img15_ChickenThali.jpeg';

const Dinner = [
  // Vegetarian Items (49-58)
  {
    id: 49,
    img: img49,
    name: "Roti Dal",
    price: 70,
    desc: "4 fresh rotis served with yellow dal tadka. Light and nutritious dinner option with basic salad.",
    category: "dinner",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 50,
    img: img50,
    name: "Paneer Paratha",
    price: 95,
    desc: "2 stuffed parathas with cottage cheese filling, served with curd and pickle. Wholesome dinner option.",
    category: "dinner",
    rating: 4.4,
    isVeg: true,
  },
  {
    id: 51,
    img: img51,
    name: "Mix Veg Roti",
    price: 80,
    desc: "4 rotis with mixed vegetable curry. Balanced meal with seasonal vegetables and basic salad.",
    category: "dinner",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 52,
    img: img52,
    name: "Palak Rice Bowl",
    price: 85,
    desc: "Spinach rice served with raita. Light and nutritious dinner option rich in iron.",
    category: "dinner",
    rating: 4.0,
    isVeg: true,
  },
  {
    id: 53,
    img: img53,
    name: "Veg Khichdi",
    price: 75,
    desc: "Rice and lentils cooked together with vegetables. Served with papad and pickle. Easy to digest dinner.",
    category: "dinner",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 54,
    img: img54,
    name: "Chole Kulcha",
    price: 90,
    desc: "2 butter kulchas served with chickpea curry. Popular North Indian dinner combination.",
    category: "dinner",
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 55,
    img: img55,
    name: "Aloo Jeera Rice",
    price: 80,
    desc: "Cumin rice with potato curry. Simple and satisfying dinner option with papad.",
    category: "dinner",
    rating: 4.1,
    isVeg: true,
  },
  {
    id: 56,
    img: img56,
    name: "Veg Fried Rice",
    price: 85,
    desc: "Chinese style fried rice with vegetables. Served with manchurian sauce. Indo-Chinese option.",
    category: "dinner",
    rating: 4.2,
    isVeg: true,
  },
  {
    id: 57,
    img: img57,
    name: "Dal Khichdi",
    price: 75,
    desc: "Comfort meal of rice and lentils. Served with papad and pickle. Light on stomach.",
    category: "dinner",
    rating: 4.3,
    isVeg: true,
  },
  {
    id: 58,
    img: img58,
    name: "Veg Thali",
    price: 110,
    desc: "Complete meal with 4 rotis, dal, sabzi, rice, and dessert. Full dinner option.",
    category: "dinner",
    rating: 4.6,
    isVeg: true,
  },

  // Non-Vegetarian Items (59-63)
  {
    id: 59,
    img: img59,
    name: "Chicken Roti",
    price: 115,
    desc: "4 rotis with chicken curry. Served with onion and basic salad. Standard non-veg dinner.",
    category: "dinner",
    rating: 4.4,
    isVeg: false,
  },
  {
    id: 60,
    img: img60,
    name: "Chicken Pulao",
    price: 120,
    desc: "Mildly spiced rice with chicken pieces. Served with raita. Lighter than biryani.",
    category: "dinner",
    rating: 4.3,
    isVeg: false,
  },
  {
    id: 61,
    img: img61,
    name: "Butter Chicken Bowl",
    price: 130,
    desc: "Rich chicken curry served with 3 butter rotis. Premium dinner option.",
    category: "dinner",
    rating: 4.7,
    isVeg: false,
  },
  {
    id: 62,
    img: img62,
    name: "Chicken Fried Rice Combo",
    price: 125,
    desc: "Chinese style chicken fried rice with manchurian sauce and soup.",
    category: "dinner",
    rating: 4.5,
    isVeg: false,
  },
  {
    id: 63,
    img: img63,
    name: "Chicken Thali",
    price: 140,
    desc: "Complete meal with chicken curry, 4 rotis, dal, rice, and dessert. Full dinner option.",
    category: "dinner",
    rating: 4.8,
    isVeg: false,
  },
];

export default Dinner;