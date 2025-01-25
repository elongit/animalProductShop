import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/appData";
import {  toast } from "react-toastify";

const initialState = {
  products: productData,
  items: [],
};

const cartSlice = createSlice({
  name: "shoppingCart",  
  initialState,

  reducers: {
    addToCart: {
      reducer(state, action) {
        const newItem = action.payload;
        
        // Check if the item already exists in the cart
        const existingItem = state.items.find((item) => item.id === newItem.id);

        if (existingItem) {
          existingItem.quantity += 1;
          toast.info(newItem.name + '  quantity has been increased'  ,  { autoClose: 1000 ,className: 'text-sm  md:text-lg w-2/3 md:w-full m-1'});

        } else {
          state.items.push({ ...newItem, quantity: 1 });
          console.log(newItem.name);
          
         toast.success(newItem.name + ' added to cart'  ,  { autoClose: 1000 , className: 'text-sm  md:text-lg w-2/3 md:w-full m-1' });

        }
      },
      prepare(product, personalization) {
        return {
          payload: { ...product, personalization: personalization || "" },
        };
      },
    },

    increaseQuantity: {
      reducer(state, action) {
        const item = state.items.find((item) => item.id === action.payload.id);
            
        if (item) {
          item.quantity += 1;
        }
      },
      prepare(id) {
        return {
          payload: { id },
        };
      },
    },

    decreaseQuantity: { 
      reducer(state, action) {
        const item = state.items.find((item) => item.id === action.payload.id);

        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
      prepare(id) {
        return {
          payload: { id },
        };
      },
    },

    removeItem: {
        reducer(state, action) {
          const { id } = action.payload;
          state.items = state.items.filter((item) => item.id !== id);
          toast.warning("Item removed from cart" ,  { autoClose: 1000 });
        },
      
      prepare(id) {
        return {
          payload: { id },
        };
      },
    },

    clearCart : {
      reducer(state){
        state.items = []
        console.log(state.items);
        
      }
    }

    
  },
});

// Selectors
export const selectCartItems = (state) => state.shoppingCart.items;

// Actions
export const { addToCart,removeItem, increaseQuantity, decreaseQuantity , clearCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
