// reducers/groupReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupId: null,
  inviteCode: "",
  userId: "",
  groupId: "",
  isTeamExist: false,
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
    setSelectedUserId(state, action) {
      state.userId = action.payload;
    },
    setSelectedTeamExist(state, action) {
      state.userId = action.payload;
    },
  },
});

export const {
  setSelectedGroupId,
  setSelectedInviteCode,
  setSelectedUserId,
  setSelectedTeamExist,
} = groupSlice.actions;
export default groupSlice.reducer;
