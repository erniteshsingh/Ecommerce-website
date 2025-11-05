import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupuser: JSON.parse(localStorage.getItem("signupuser")) || [],
  loginuser: JSON.parse(localStorage.getItem("loginuser")) || null,
};
const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.signupuser.push(action.payload);
      localStorage.setItem("signupuser", JSON.stringify(state.signupuser));
    },
    login: (state, action) => {
      state.loginuser = action.payload;
      localStorage.setItem("loginuser", JSON.stringify(state.loginuser));
    },
    logout: (state) => {
      state.loginuser = null;
      localStorage.removeItem("loginuser");
      console.log("User Logout ho gya hai");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
