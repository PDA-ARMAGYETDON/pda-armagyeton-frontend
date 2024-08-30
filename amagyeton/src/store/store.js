import { combineReducers, configureStore } from "@reduxjs/toolkit";
import checkHeadCount from "./reducers/HeadCount";

const rootReducer = combineReducers({
  headCount: checkHeadCount,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
