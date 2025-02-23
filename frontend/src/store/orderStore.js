import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orders: [], // Array to store ordered items
  addOrder: (item) =>
    set((state) => {
      const existingItem = state.orders.find((order) => order.id === item.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return {
          orders: state.orders.map((order) =>
            order.id === item.id
              ? { ...order, qty: order.qty + 1 }
              : order
          ),
        };
      } else {
        // Add new item to orders
        return { orders: [...state.orders, { ...item, qty: 1 }] };
      }
    }),
  removeOrder: (id) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== id),
    })),
}));

export default useOrderStore;