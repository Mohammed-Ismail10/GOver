import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import { Provider } from 'react-redux'
import { store } from './Components/Redux/store.js'
import { LoginContextProvider } from './Context/loginContext.js'
import All from './Components/All/All.jsx'
import Details from './Components/Detalis/Details.jsx'
import Platform from './Components/Platform/Platform.jsx'
import SortBy from './Components/SortBy/SortBy.jsx'
import Category from './Components/Category/Category.jsx'
import ProtectRoute from './Components/ProtectRoute/ProtectRoute.jsx'
import { Offline, Online } from "react-detect-offline";

export default function App() {

  let routers = createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<ProtectRoute><Home/></ProtectRoute>},
      {path:'all',element:<ProtectRoute><All/></ProtectRoute>},
      {path:'details/:id',element:<ProtectRoute><Details/></ProtectRoute>},
      {path:'platform/:pc',element:<ProtectRoute><Platform/></ProtectRoute>},
      {path:'platform/:browser',element:<ProtectRoute><Platform/></ProtectRoute>},
      {path:'sort-by/:release',element:<ProtectRoute><SortBy/></ProtectRoute>},
      {path:'sort-by/:poularity',element:<ProtectRoute><SortBy/></ProtectRoute>},
      {path:'sort-by/:alphabetical',element:<ProtectRoute><SortBy/></ProtectRoute>},
      {path:'sort-by/:relevance',element:<ProtectRoute><SortBy/></ProtectRoute>},
      {path:'category/:racing',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:sports',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:social',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:shooter',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:open',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:zombie',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:fantasy',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:actionr',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:action',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:flight',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'category/:battle',element:<ProtectRoute><Category/></ProtectRoute>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
    ]}
  ])






  return (
    <><Provider store={store}>
      <Offline>
        <div className='shadow bg-danger text-white position-fixed p-2' style={{right:`3%`,bottom:`3%`,zIndex:`1`}}>You are offline</div>
      </Offline>
      <LoginContextProvider>
      <RouterProvider router={routers}/>
      </LoginContextProvider>
    </Provider>
    </>
  )
}
