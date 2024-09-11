// reducers/groupReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGroupId: null,
  inviteCode: "",
  userId: "",
  groupId: "",
  isTeamExist: false,
  stockcode: "005930",
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
      state.isTeamExist = action.payload;
    },
    setSelectedCode(state, action) {
      state.stockcode = action.payload;
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
