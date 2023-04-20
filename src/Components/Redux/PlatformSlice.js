import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {games:null};

let headers = {
  'X-RapidAPI-Key': `0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc`,
  'X-RapidAPI-Host': `free-to-play-games-database.p.rapidapi.com`
}

export let getPlatform = createAsyncThunk(`platform/getPlatform`,async(plat)=>{
  let {data} =await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plat}`,{
    headers
  },
  {
    params:{
      platform:`'${plat}'`
    }
  })
  return data
})




let platformSlice = createSlice({
  name:`platform`,
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getPlatform.fulfilled,(initialState,action)=>{
      initialState.games=action.payload;
    })
  }
})


export let platformReducer = platformSlice.reducer;
