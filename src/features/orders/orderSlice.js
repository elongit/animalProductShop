import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
  orders: [],
};



  
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
      addOrder: {
          reducer(state, action) {
              state.orders.push(action.payload);

          },
          prepare(order , totalPrice) {
              const currentDate = new Date();
              const orderDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
              const orderNumber = Math.random().toString(36).substring(2, 15);
                const token = Cookies.get('token');
              
           
              
              return {
                  payload: {
                      items:[...order],
                      userId : token,
                      orderNumber :orderNumber ,
                      orderDate : orderDate,
                      orderTotalPrice : totalPrice,
                      status: "Paid",
                  },
              };
          },
      },
  },
});

export const { addOrder } = orderSlice.actions;
export const selectAllOrders = (state) => state.orders.orders;
export default orderSlice.reducer;
