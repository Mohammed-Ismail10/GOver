import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./RegisterSlice.js";
import { loginReducer } from "./LoginSlice.js";
import { allReducer } from "./AllSlice.js";
import { detailsReducer } from "./DetailsSlice.js";
import { platformReducer } from "./PlatformSlice.js";
import { categoryReducer } from "./CategorySlice.js";




export let store = configureStore({
  reducer:{
    register:registerReducer,
    login:loginReducer,
    allGames:allReducer,
    details:detailsReducer,
    platform:platformReducer,
    category:categoryReducer
  }
})