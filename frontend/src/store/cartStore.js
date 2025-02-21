import { create } from "zustand";

const useCartStore = create((set) => ({
   cart: [],
   addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
   removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
   
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
