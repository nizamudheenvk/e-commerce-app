import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartItems",
    initialState:[],
    reducers:{
        addToCart :(state,acctionBycomponent)=>{
            const existingProduct = state.find(item=>item.id==acctionBycomponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalprice=existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
                state=[...remainingProduct,existingProduct]
            }else{
                state.push({...acctionBycomponent.payload,quantity:1,totalprice:acctionBycomponent.payload.price})
            }

        },
        quantityIncrement:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity++
            existingProduct.totalprice = existingProduct.quantity*existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
            state =[...remainingProduct,existingProduct]
         
        },
        removeCartItem:(state,actionByCart)=>{
        return state.filter(item=>item.id!=actionByCart.payload)
        },
        quantitydecrement:(state,actionByCart)=>{
            const existingProduct = state.find(item=>item.id==actionByCart.payload)
            existingProduct.quantity--
            existingProduct.totalprice = existingProduct.quantity*existingProduct.price
            const remainingProduct = state.filter(item=>item.id!=existingProduct.id)
            state =[...remainingProduct,existingProduct]
         
        },
        emptyCart:(state)=>{
            return state =[]
        }


    }
})
export const {addToCart,removeCartItem,quantityIncrement,quantitydecrement,emptyCart}=cartSlice.actions
export default cartSlice.reducer