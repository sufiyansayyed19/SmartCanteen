import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (item) => {
        console.log(item);
        set((state) => {
          const existingItem = state.cartItems.find((cartItem) => cartItem._id === item._id);

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem._id === item._id
                  ? { ...cartItem, qty: cartItem.qty + 1 }
                  : cartItem
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...item, qty: 1, status: item.status || "Due" }],
            };
          }
        });
      },

  removeFromCart: (_id) => // Changed parameter from id to _id
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== _id), // Changed id to _id
    })),

  incrementQty: (_id) => // Changed parameter from id to _id
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item._id === _id ? { ...item, qty: item.qty + 1 } : item // Changed id to _id
      ),
    })),

  decrementQty: (_id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item._id === _id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      ),
    })),

  setCartItems: (value) => set({ cartItems: value }),

  clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;