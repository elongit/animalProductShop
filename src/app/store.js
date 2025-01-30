import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/cart/cartSlice'
import ProductReducer from '../features/product/productSlice'
import  AuthReducer from '../features/auth/authSlice'
import OrderReducer from '../features/orders/orderSlice'
import CheckOutReducer from '../features/payment/checkoutSlice'
export const store = configureStore({
    reducer:{
        shoppingCart : CartReducer,
        products : ProductReducer,
        auth : AuthReducer,
        orders : OrderReducer,
        checkout : CheckOutReducer
    }
})