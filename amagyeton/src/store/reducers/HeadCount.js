import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  HeadCount: 2,
};

const CountSlice = createSlice({
  name: "HeadCount",
  initialState: initialState,
  reducers: {
    checkHeadCount(state, action) {
      state.HeadCount = action.payload;
    },
  },
});

export const { checkHeadCount } = CountSlice.actions;
export default CountSlice.reducer;
