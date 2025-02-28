import { create } from "zustand";

const useAppStore = create((set) => ({
    // Cart.jsx && PaymentMethod.jsx
    isPaymentChosen: false,
    setIsPaymentChosen: (value) => set({ isPaymentChosen: value }),
    



}));



export default useAppStore;