import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headCount: 2,
};

const CountSlice = createSlice({
  name: "HeadCount",
  initialState: initialState,
  reducers: {
    checkHeadCount(state, action) {
      state.headCount = action.payload;
    },
  },
});

export const { checkHeadCount } = CountSlice.actions;
export default CountSlice.reducer;
