import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {games:null};

let headers = {
  'X-RapidAPI-Key': `0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc`,
  'X-RapidAPI-Host': `free-to-play-games-database.p.rapidapi.com`
}

export let getSortBy = createAsyncThunk(`sortBy/getSortBy`,async(sort)=>{
  let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sort}`,{
    headers
  },
  {
    params:{
      'sort-by':`${sort}`
    }
  })
  return data
})




let sortBySlice = createSlice({
  name:`sortBy`,
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getSortBy.fulfilled,(initialState,action)=>{
      initialState.games=action.payload;
    })
  }
})


export let sortByReducer = sortBySlice.reducer;