import { create } from "zustand";
import { persist } from "zustand/middleware";
import ExpData from "../data/ExpData";


const useAdminStore = create(
  persist(
    (set, get) => ({
      // Store for all products
      AllProducts: ExpData,
      
      // Add a new product
      addProduct: async (product) => {
        try {
          // Here you would make an API call to your MongoDB backend
          // const response = await fetch('/api/products', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(product)
          // });
          // const newProduct = await response.json();
          
          // For now, we'll simulate the response
          // In production, use the actual response from MongoDB which will include the _id
          const newProduct = { 
            ...product, 
            _id: Date.now().toString() // Simulating MongoDB's _id (remove this in production)
          };
          
          // Update local state with the new product
          set((state) => ({
            AllProducts: [...state.AllProducts, newProduct]
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
          // Here you would make an API call to your MongoDB backend
          // const response = await fetch(`/api/products/${productId}`, {
          //   method: 'PUT',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify(updatedData)
          // });
          // const updatedProduct = await response.json();
          console.log(productId,updatedData)
          // Update local state
          set((state) => ({
            AllProducts: state.AllProducts.map((product) => 
              product.id === Number(productId) 
                ? { ...product, ...updatedData } 
                : product
            )
          }));
          
          return { success: true };
        } catch (error) {
          console.error("Failed to update product:", error);
          return { success: false, error };
        }
      },
      
      // Delete a product
      deleteProduct: async (productId) => {
        try {
          // Here you would make an API call to your MongoDB backend
          // await fetch(`/api/products/${productId}`, {
          //   method: 'DELETE'
          // });
          
          // Update local state
          set((state) => ({
            AllProducts: state.AllProducts.filter((product) => product._id !== productId)
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
        return products.find(product => product._id === productId) || null;
      },


      //Product Categories array
      // categories : ["today's special","combo", "breakfast", "lunch", "dinner", "chips", "biscuits", "drink", "juice", "sweet"],
    }),

    
     


    {
      name: "admin-products-storage", // name for localStorage/sessionStorage
      partialize: (state) => ({ AllProducts: state.AllProducts }), // only persist products array
    }
  )
);

export default useAdminStore;