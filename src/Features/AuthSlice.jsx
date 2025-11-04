import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  signupuser: [],
  loginuser: [],
};
const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginuser.push(action.payload);
    },
    signup: (state, action) => {
      state.signupuser.push(action.payload);
    },
    logout: (state) => {
      console.log("User Logout ho gya hai");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
