import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = { data: null}

export let postReister = createAsyncThunk('refister/postRegister', async (values) => {
  let { data } = await axios.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/signup`, values)
  return data
})

let registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(postReister.fulfilled, (initialState, action) => {
      initialState.data = action.payload;
    })
  }
})


export let registerReducer = registerSlice.reducer;