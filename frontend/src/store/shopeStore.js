import { create } from "zustand";

const useShopStore = create((set) => ({
  orders: [],  // Orders list
  products: [], // Products list
  currency: "$", // Default currency

  // Set orders
  setOrders: (newOrders) => set({ orders: newOrders }),

  // Set products
  setProducts: (newProducts) => set({ products: newProducts }),

  // Set currency
  setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));

export default useShopStore;
