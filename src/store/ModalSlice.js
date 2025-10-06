import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenModal: false
}

const ModalSlice = createSlice({
    name:"modal",
    initialState,
    reducers: {
        openCloseModal : (state) => {
            state.isOpenModal = !state.isOpenModal;
        }
    }
})

export const { openCloseModal} = ModalSlice.actions;

export default ModalSlice.reducer;

