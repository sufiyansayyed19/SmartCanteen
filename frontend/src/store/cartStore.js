import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, qty: cartItem.qty + 1 } // Use "qty"
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, qty: 1 }] }; // Use "qty"
      }
    });
  },

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  incrementQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ),
    })),

  decrementQty: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      ),
    })),
}));

export default useCartStore;
