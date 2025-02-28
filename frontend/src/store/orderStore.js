import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orderItems: [], // Renamed from `orders` to `orderItems`

  addOrder: (item) =>
    set((state) => {
      const existingItem = state.orderItems.find((order) => order._id === item._id); // Changed id to _id
      if (existingItem) {
        // Increase quantity if item already exists
        return {
          orderItems: state.orderItems.map((order) =>
            order._id === item._id // Changed id to _id
              ? { ...order, qty: order.qty + 1 }
              : order
          ),
        };
      } else {
        // Add new item to orderItems
        return { orderItems: [...state.orderItems, { ...item, qty: 1 }] };
      }
    }),

  removeOrder: (_id) => // Changed parameter from id to _id
    set((state) => ({
      orderItems: state.orderItems.filter((order) => order._id !== _id), // Changed id to _id
    })),

  setOrderItems: (value) => set({ orderItems: value }),
}));

export default useOrderStore;