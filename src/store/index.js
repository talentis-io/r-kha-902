import { configureStore } from "@reduxjs/toolkit";
import posts from "./postsSlice";
import modal from "./ModalSlice";
import alert from "./Alert";
import auth from "./AuthSlice";
 const  store = configureStore({
    reducer:{
        posts,
        modal,
        alert,
        auth
    }
})

export default store;