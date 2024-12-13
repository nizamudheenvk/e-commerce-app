import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice =  createSlice({
    name : 'wishlist',
    initialState : [],
    reducers:{
        addtoWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeItme:(state,actionFromWishlist)=>{
            return state.filter(item=>item.id!=actionFromWishlist.payload)
        }
    }
})
export const {addtoWishlist,removeItme}= wishlistSlice.actions
export default wishlistSlice.reducer