import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentData: [],
};

const checkOutSlice = createSlice({
  name: "Checkout",
  initialState,

  reducers: {
    saveData: {
      reducer(state, action) {
        state.paymentData.push(action.payload);
        console.log(action.payload);
  
        
      },
      prepare(data) {
        return {
          payload: {
            ...data,
             userId : data.userId, 
          },
        };
      },
    },
  },
});

// Selectors
export const selectPaymentData = (state) => state.checkout.paymentData;

// Actions
export const { saveData } = checkOutSlice.actions;

// Reducer
export default checkOutSlice.reducer;
