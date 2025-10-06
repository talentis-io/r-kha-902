import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { id: 1, userName: "Reda", isLoged: false },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAndLogout: (state) => {
        state.user.isLoged = !state.user.isLoged;
    }
  },
});

export const {loginAndLogout} = AuthSlice.actions;

export default AuthSlice.reducer;
