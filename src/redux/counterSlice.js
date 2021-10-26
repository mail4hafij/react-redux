import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    inc: (state, action) => {
      state.count += action.payload;
    },
    dec: (state, action) => {
      state.count -= action.payload;
    },
    set: (state, action) => {
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inc, dec, set } = counterSlice.actions;

export default counterSlice.reducer;
