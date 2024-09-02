// reducers/groupReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupId: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setSelectedGroupId(state, action) {
      state.selectedGroupId = action.payload;
    },
  },
});

export const { setSelectedGroupId } = groupSlice.actions;
export default groupSlice.reducer;
