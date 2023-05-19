import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {data:null};









export let postLogin = createAsyncThunk(`login/postLogin`,async (values)=>{
  let {data} = await axios.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/signin`,values)
  return data
})



let loginSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    changePassword:()=>{
      alert(`ههههه قم بعمل حساب جديد`);
    }
  },


  extraReducers:(builder)=>{
    builder.addCase(postLogin.fulfilled,(initialState,action)=>{
      initialState.data=action.payload;
    })
  }
});


export let loginReducer = loginSlice.reducer;
export let {changePassword} = loginSlice.actions;