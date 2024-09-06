import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkHeadCount from "./reducers/HeadCount";
import groupReducer from "./reducers/Group";

const rootReducer = combineReducers({
  headCount: checkHeadCount,
  group: groupReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
