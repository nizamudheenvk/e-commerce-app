import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const result = await axios.get("https://api.escuelajs.co/api/v1/products")
    // console.log(result.data);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data))
    return result.data
    
})

const  productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts :[],
        dummyallProducts :[],
        loading :false,
        errorMsg:""
},
reducers:{
    searchProducts :(state,actinByeader)=>{
state.allProducts=state.dummyallProducts.filter(item=>item.title.toLowerCase().includes(actinByeader.payload))
    }

},extraReducers :(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
        state.allProducts = apiResult.payload
        state.dummyallProducts=apiResult.payload
        state.loading = false
        state.errorMsg=""
    })

    builder.addCase(fetchProducts.pending,(state)=>{
        state.allProducts = []
        state.dummyallProducts=[]
        state.loading = false
        state.errorMsg=""
    })

    builder.addCase(fetchProducts.rejected,(state)=>{
        state.allProducts = []
        state.dummyallProducts=[]
        state.loading = false
        state.errorMsg="Apo result Failed"
    })
}
})
export const{searchProducts}=productSlice.actions
export default productSlice.reducer

