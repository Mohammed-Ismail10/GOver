import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let headers = {
  'X-RapidAPI-Key': `0dfb2b2421msh89a3443eb2c628dp1443fdjsnbc37323b02cc`,
  'X-RapidAPI-Host': `free-to-play-games-database.p.rapidapi.com`
}

let initialState = { games: null, resultSearch: [] };


export let getAllGames = createAsyncThunk('all/getAllGames', async () => {
  let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
    {
      headers
    })
  return data
})





let allSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {
    search: (initialState, { payload }) => {
      initialState.resultSearch = [];
      initialState.resultSearch = initialState.games.filter((game) => game.title.toLowerCase().includes(payload.toLowerCase())
      )
    }
  },
  

  extraReducers: (builder) => {
    builder.addCase(getAllGames.fulfilled, (initialState, action) => {
      initialState.games = action.payload
    })
  }
})




export let allReducer = allSlice.reducer;
export let { search } = allSlice.actions;
