import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orderItems: [], // Renamed from `orders` to `orderItems`
  addOrder: (item) =>
    set((state) => {
      const existingItem = state.orderItems.find((order) => order.id === item.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return {
          orderItems: state.orderItems.map((order) =>
            order.id === item.id
              ? { ...order, qty: order.qty + 1 }
              : order
          ),
        };
      } else {
        // Add new item to orderItems
        return { orderItems: [...state.orderItems, { ...item, qty: 1 }] };
      }
    }),
  removeOrder: (id) =>
    set((state) => ({
      orderItems: state.orderItems.filter((order) => order.id !== id), // Updated to `orderItems`
    })),

    setOrderItems: (value) => set({orderItems: value}),
}));

export default useOrderStore;