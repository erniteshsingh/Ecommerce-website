import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { value: 0 },

  reducers: {
    createproduct: (state, action) => {},
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
