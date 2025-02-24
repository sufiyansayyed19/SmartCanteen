import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [], 

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, qty: cartItem.qty + 1 } 
              : cartItem
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...item, qty: 1, status: item.status || "Due" }], 
      }
    }});
  },

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  incrementQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  decrementQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      ),
    })),

  setCartItems: (value) => set({ cartItems: value }), 

  
}));

export default useCartStore;
