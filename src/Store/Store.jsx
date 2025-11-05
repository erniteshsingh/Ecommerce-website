import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Features/AuthSlice";
import ProductReducer from "../Features/ProductSlice";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    createproduct:ProductReducer,
  },
});
