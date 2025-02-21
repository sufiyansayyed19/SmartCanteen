import img1 from '../assets/Breakfast/img1_plainDos.jpeg'
import img2 from "../assets/Breakfast/img2_IdliSambhar.jpeg"
import img3 from '../assets/Breakfast/img3_chole.jpeg'
import img4 from "../assets/Breakfast/img4_onionUttappam.jpeg"
import img5 from '../assets/Breakfast/img1_plainDos.jpeg'
import img6 from '../assets/Breakfast/img6_VadaPav.jpeg'
import img7 from '../assets/Breakfast/img7_Upma.jpeg'
import img8 from '../assets/Breakfast/img8_masalaDosa.jpeg'
import img9 from '../assets/Breakfast/img9_poha.png'
import img10 from '../assets/Breakfast/img10_misalPav.jpeg'
import img11 from '../assets/Breakfast/img11_PaneerParatha.jpeg'
import img12 from '../assets/Breakfast/img12_MeduVada.jpeg'
import img13 from '../assets/Breakfast/img13_samosaPav.jpeg'
import img14 from '../assets/Breakfast/img14_puriBhaji.jpeg'
import img15 from '../assets/Breakfast/img15_Rava_Idli.jpeg'




const Breakfast = [
  {
    id: 1,
    img: img1, // Plain Dosa (img1_plainDos.jpeg)
    name: "Plain Dosa",
    price: 100,
    desc: "Crispy, thin crepe made from fermented rice and lentil batter. Served with coconut chutney and sambar. A light and healthy breakfast option that's rich in probiotics.",
    category: "South Indian Breakfast",
    rating: 4.6,
  },
  {
    id: 2,
    img: img2, // Idli Sambar (img2_IdliSambhar.jpeg)
    name: "Idli Sambar",
    price: 80,
    desc: "Soft, steamed rice cakes made from fermented rice and lentil batter. Served with spiced lentil soup and coconut chutney. A protein-rich, digestible breakfast.",
    category: "South Indian Breakfast",
    rating: 4.5,
  },
  {
    id: 3,
    img: img3, // Chole Bhature (img3_chole.jpeg)
    name: "Chole Bhature",
    price: 150,
    desc: "Fluffy, deep-fried bread served with spiced chickpea curry. Garnished with onions and pickles. A hearty Punjabi breakfast favorite.",
    category: "North Indian Breakfast",
    rating: 4.8,
  },
  {
    id: 4,
    img: img4, // Onion Uttapam (img4_onionUttappam.jpeg)
    name: "Onion Uttapam",
    price: 120,
    desc: "Thick rice and lentil pancake topped with onions, tomatoes, and green chilies. Served with sambar and chutney. A savory breakfast option.",
    category: "South Indian Breakfast",
    rating: 4.4,
  },
  {
    id: 5,
    img: img5, // Aloo Paratha (corrected to img5_AlooParatha.jpeg)
    name: "Aloo Paratha",
    price: 90,
    desc: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with butter, yogurt, and pickle. A classic North Indian breakfast.",
    category: "North Indian Breakfast",
    rating: 4.7,
  },
  {
    id: 6,
    img: img6, // Vada Pav (img6_VadaPav.jpeg)
    name: "Vada Pav",
    price: 50,
    desc: "Spiced potato fritter in a bun with garlic and chili chutneys. Mumbai's favorite breakfast sandwich and street food.",
    category: "Street Food Breakfast",
    rating: 4.6,
  },
  {
    id: 7,
    img: img7, // Upma (img7_Upma.jpeg)
    name: "Upma",
    price: 70,
    desc: "Savory semolina porridge cooked with vegetables and mild spices. A light and healthy breakfast option from South India.",
    category: "South Indian Breakfast",
    rating: 4.2,
  },
  {
    id: 8,
    img: img8, // Masala Dosa (img8_masalaDosa.jpeg)
    name: "Masala Dosa",
    price: 130,
    desc: "Crispy rice crepe filled with spiced potato filling. Served with coconut chutney and sambar. A popular variant of plain dosa.",
    category: "South Indian Breakfast",
    rating: 4.8,
  },
  {
    id: 9,
    img: img9, // Poha (img9_poha.jpeg)
    name: "Poha",
    price: 60,
    desc: "Flattened rice flakes cooked with onions, peanuts, and spices. A light and nutritious breakfast from Central India.",
    category: "Central Indian Breakfast",
    rating: 4.3,
  },
  {
    id: 10,
    img: img10, // Misal Pav (img10_misalPav.jpeg)
    name: "Misal Pav",
    price: 110,
    desc: "Spicy sprouted moth beans curry served with bread rolls. Topped with crunchy farsan, onions, and coriander. A protein-rich Maharashtrian breakfast.",
    category: "Western Indian Breakfast",
    rating: 4.5,
  },
  {
    id: 11,
    img: img11, // Paneer Paratha (img11_PaneerParatha.jpeg)
    name: "Paneer Paratha",
    price: 100,
    desc: "Whole wheat flatbread stuffed with spiced cottage cheese mixture. Served with butter, yogurt, and pickle.",
    category: "North Indian Breakfast",
    rating: 4.6,
  },
  {
    id: 12,
    img: img12, // Medu Vada (img12_MeduVada.jpeg)
    name: "Medu Vada",
    price: 70,
    desc: "Crispy lentil doughnuts seasoned with spices and curry leaves. Served with coconut chutney and sambar.",
    category: "South Indian Breakfast",
    rating: 4.4,
  },
  {
    id: 13,
    img: img13, // Samosa with Chai (img13_Samosa.jpeg)
    name: "Samosa with Chai",
    price: 60,
    desc: "Crispy pastry filled with spiced potatoes and peas, served with sweet-spicy chutney and masala chai.",
    category: "Street Food Breakfast",
    rating: 4.7,
  },
  {
    id: 14,
    img: img14, // Puri Bhaji (img14_puriBhaji.jpeg)
    name: "Puri Bhaji",
    price: 90,
    desc: "Deep-fried wheat bread served with spiced potato curry. A classic breakfast combination loved across India.",
    category: "North Indian Breakfast",
    rating: 4.5,
  },
  {
    id: 15,
    img: img15, // Rava Idli (img15_RavaIdli.jpeg)
    name: "Rava Idli",
    price: 85,
    desc: "Steamed semolina cakes with carrots and cashews. A healthier and instant variation of traditional idli.",
    category: "South Indian Breakfast",
    rating: 4.3,
  },
];
  
  export default Breakfast;