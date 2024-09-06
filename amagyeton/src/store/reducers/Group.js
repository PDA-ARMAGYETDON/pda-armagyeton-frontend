// reducers/groupReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupId: null,
  inviteCode: "",
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setSelectedGroupId(state, action) {
      state.selectedGroupId = action.payload;
    },

    setSelectedInviteCode(state, action) {
      state.inviteCode = action.payload;
    },
  },
});

export const { setSelectedGroupId, setSelectedInviteCode } = groupSlice.actions;
export default groupSlice.reducer;
