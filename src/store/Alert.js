import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    content:"",
    isopenAlert : false,
    variant:""
}

const AlertSlice = createSlice({
    name:"alert",
    initialState,
    reducers:{
        openCloseAlert: (state, action) => {
            console.log(action.payload.content)
            state.isopenAlert = !state.isopenAlert;
            state.content = action.payload.content;
            state.variant = action.payload.variant;
        }
    }
})

export const {openCloseAlert} = AlertSlice.actions;

export default AlertSlice.reducer;