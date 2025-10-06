import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import  store  from "./store/index.js";

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {postParamHandler} from "./lib/util.js"
// Pages
import RoutLayout from "./Pages/RootLayout.jsx"
import Home from "./Pages/Home.jsx"
import ErrorPage from './Pages/ErrorPage.jsx';
import AddPost from "./Pages/AddPost.jsx";
import EditPost from './Pages/EditPost.jsx';
import Details from './Pages/Details.jsx';
const routes = createBrowserRouter([
  {
    path:"/",
    element: <RoutLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element: <Home/>},
      {
        path: "post",
        element:<Home/>
      },
      {
        path:"post/add",
        element: <AddPost/>
      },
      {
        path:"post/:id/details",
        element: <Details/>,
        loader: postParamHandler,
      },
      {
        path:"post/:id/edit",
        element: <EditPost/>,
        loader: postParamHandler
      }
    ]
  },
  {
    path:"login",
    // element: <Auth/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </React.StrictMode>,
)
