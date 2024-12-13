import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/produceslice'
import wishlistSlice from  './slices/wishSlice'
import cartSlice from './slices/Cartslice'


const CartStore = configureStore({
    reducer:{
        productReducer : productSlice,
        wishlistReducer : wishlistSlice,
        cartReducer : cartSlice
    }
})
export default CartStore












