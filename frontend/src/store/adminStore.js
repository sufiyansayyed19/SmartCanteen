import { create } from "zustand";
import { persist } from "zustand/middleware";
import ExpData from "../data/ExpData";

const useAdminStore = create(
  persist(
    (set, get) => ({
      // Store for all products (assuming ExpData now uses _id and string IDs)
      AllProducts: ExpData,

      // Add a new product
      addProduct: async (product) => {
        try {
          // Simulate MongoDB response with _id as a string
          const newProduct = {
            ...product,
            _id: Date.now().toString(), // Simulating MongoDB's string _id (remove in production with actual MongoDB _id)
          };

          // Update local state with the new product
          set((state) => ({
            AllProducts: [...state.AllProducts, newProduct],
          }));

          return { success: true, product: newProduct };
        } catch (error) {
          console.error("Failed to add product:", error);
          return { success: false, error };
        }
      },

      // Update an existing product
      updateProduct: async (productId, updatedData) => {
        try {
          // Update local state (using _id and string comparison)
          set((state) => ({
            AllProducts: state.AllProducts.map((product) =>
              product._id === productId // Changed from product.id === Number(productId)
                ? { ...product, ...updatedData }
                : product
            ),
          }));

          console.log(productId, updatedData); // Debugging remains unchanged
          return { success: true };
        } catch (error) {
          console.error("Failed to update product:", error);
          return { success: false, error };
        }
      },

      // Delete a product
      deleteProduct: async (productId) => {
        try {
          // Update local state (using _id and string comparison)
          set((state) => ({
            AllProducts: state.AllProducts.filter(
              (product) => product._id !== productId // Changed from product.id !== Number(productId)
            ),
          }));

          return { success: true };
        } catch (error) {
          console.error("Failed to delete product:", error);
          return { success: false, error };
        }
      },

      // Set all products (useful when fetching from MongoDB)
      setAllProducts: (products) => {
        set({ AllProducts: products });
      },

      // Get a single product by ID
      getProductById: (productId) => {
        const products = get().AllProducts;
        return products.find((product) => product._id === productId) || null; // Updated to use _id
      },

      // Product Categories array (unchanged)
      // categories: ["today's special", "combo", "breakfast", "lunch", "dinner", "chips", "biscuits", "drink", "juice", "sweet"],
    }),
    {
      name: "admin-products-storage", // name for localStorage/sessionStorage
      partialize: (state) => ({ AllProducts: state.AllProducts }), // only persist products array
    }
  )
);

export default useAdminStore;