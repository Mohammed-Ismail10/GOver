import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = { gameDetails: null };

let headers = {
  'X-RapidAPI-Key': `0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc`,
  'X-RapidAPI-Host': `free-to-play-games-database.p.rapidapi.com`
}

export let getGameDetails = createAsyncThunk(`details/getGameDetails`, async (id) => {
  let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    {
      headers
    },
    {
      params: {
        id
      }
    })
  return data
})



let detailsSlice = createSlice({
  name: `details`,
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getGameDetails.fulfilled, (initialState, action) => {
      initialState.gameDetails = action.payload;
    })
  }
})


export let detailsReducer = detailsSlice.reducer;