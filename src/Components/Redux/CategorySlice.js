import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {games:null};

let headers = {
  'X-RapidAPI-Key': `0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc`,
  'X-RapidAPI-Host': `free-to-play-games-database.p.rapidapi.com`
}

export let getCategory = createAsyncThunk(`category/getCategory`,async(category)=>{
  let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,{
    headers
  },
  {
    params:{
      category
    }
  })
  return data
})




let categorySlice = createSlice({
  name:`category`,
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getCategory.fulfilled,(initialState,action)=>{
      initialState.games=action.payload;
    })
  }
})


export let categoryReducer = categorySlice.reducer;
