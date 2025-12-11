# 🍽️ SmartCanteen - Food Ordering Platform

A modern, full-stack food ordering system built with the MERN stack, designed for campus canteens and food courts. Features real-time order management, role-based access control, and an intuitive user interface.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.1.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-cyan)
![Zustand](https://img.shields.io/badge/Zustand-5.0.3-orange)

## ✨ Features

### 🛒 Customer Features
- **Browse Menu** - Category-based filtering with search functionality
- **Smart Cart** - Persistent cart with localStorage, quantity management, and real-time updates
- **Order Tracking** - Complete order lifecycle from placement to delivery
- **User Authentication** - Secure login/signup with form validation
- **Responsive Design** - Mobile-first approach with smooth animations
- **Payment Integration** - Multiple payment method selection

### 👨‍💼 Admin Features
- **Dashboard Analytics** - Sales overview, order statistics, and revenue tracking with Recharts
- **Product Management** - Add, edit, delete, and update inventory
- **Order Management** - View, process, and update order status
- **Category Control** - Organize products by categories
- **Inventory Tracking** - Monitor stock levels and low-stock alerts

### 🍳 Canteen Staff Features
- **Order Queue** - Real-time order notifications
- **Order Processing** - Update preparation and delivery status
- **Kitchen Display** - Dedicated interface for order fulfillment

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **Vite 6.1.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Zustand 5.0.3** - Lightweight state management with persistence
- **React Router DOM 6.23.1** - Client-side routing
- **React Icons 5.4.0** - Comprehensive icon library
- **React Hot Toast 2.5.2** - Beautiful toast notifications
- **Framer Motion 12.4.7** - Smooth animations
- **Recharts 2.15.1** - Data visualization for admin dashboard

### Additional Libraries
- **React Custom Scrollbars 2** - Custom scrollbar styling
- **Prop Types** - Runtime type checking
- **React Toastify** - Alternative notification system

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/sufiyansayyed19/SmartCanteen.git
cd SmartCanteen
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Environment Variables**
Create a `.env` file in the frontend directory:
```env
VITE_API_URL=your_api_url_here
```

4. **Run the development server**
```bash
npm run dev
```

The application will start at `http://localhost:5173`

## 📁 Project Structure

```
SmartCanteen/
├── frontend/
│   ├── src/
│   │   ├── assets/          # Images and static files
│   │   │   ├── Breakfast/
│   │   │   ├── Lunch/
│   │   │   ├── Dinner/
│   │   │   ├── Drinks/
│   │   │   └── ...
│   │   ├── components/      # Reusable components
│   │   │   ├── Admin/       # Admin-specific components
│   │   │   ├── CartItems.jsx
│   │   │   ├── FoodCard.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileNavbar.jsx
│   │   │   ├── SkeletonCard.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── ...
│   │   ├── data/           # Static data and food items
│   │   │   ├── Breakfast.js
│   │   │   ├── Lunch.js
│   │   │   ├── NavbarData.js
│   │   │   ├── WholeFoodData.js
│   │   │   └── ...
│   │   ├── pages/          # Page components
│   │   │   ├── Admin/      # Admin pages
│   │   │   ├── Canteen/    # Canteen staff pages
│   │   │   ├── Home.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Login.jsx
│   │   │   └── ...
│   │   ├── store/          # Zustand state management
│   │   │   ├── cartStore.js
│   │   │   ├── orderStore.js
│   │   │   ├── adminStore.js
│   │   │   └── appStore.js
│   │   ├── utils/          # Utility functions
│   │   │   └── validators.js
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Public assets
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🎨 Key Features Implementation

### Persistent Cart System
Uses Zustand with localStorage middleware to maintain cart state across sessions:
```javascript
// Automatic persistence with Zustand
const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) => { /* ... */ },
      removeFromCart: (id) => { /* ... */ },
    }),
    { name: "cart-storage" }
  )
);
```

### Form Validation
Comprehensive validation utilities for user inputs:
- Email validation with regex
- Password strength requirements
- Phone number validation (Indian format)
- Real-time error feedback

### Loading States
Enhanced UX with skeleton loaders and loading spinners:
- Skeleton cards during data fetching
- Loading spinners for async operations
- Smooth transitions with Framer Motion

### Responsive Design
Mobile-first approach with breakpoints:
- Mobile navigation with slide-in menu
- Adaptive layouts for tablets and desktops
- Touch-friendly UI elements

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🔐 Role-Based Access

### Customer Routes
- `/` - Home page
- `/menu` - Browse food items
- `/cart` - Shopping cart
- `/orders` - Order history
- `/profile` - User profile
- `/about` - About page
- `/contact` - Contact page

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/products` - Product management
- `/admin/add-product` - Add new product
- `/admin/edit-product/:id` - Edit product
- `/admin/login` - Admin authentication

### Canteen Routes
- `/canteen` - Canteen dashboard
- `/canteen/orders` - Order management

## 🎯 Future Enhancements

- [ ] Backend API integration with Express.js
- [ ] MongoDB database implementation
- [ ] JWT-based authentication
- [ ] Real-time order notifications with WebSockets
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Order history and analytics
- [ ] Review and rating system
- [ ] Advanced search and filters
- [ ] PWA support for offline functionality
- [ ] Email notifications
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sufiyan Sayyed**
- GitHub: [@sufiyansayyed19](https://github.com/sufiyansayyed19)

## 🙏 Acknowledgments

- React Icons for comprehensive icon library
- Tailwind CSS for utility-first styling
- Zustand for simple state management
- Vite for blazing-fast development experience

---

Made with ❤️ for campus food lovers
