import { combineReducers } from "@reduxjs/toolkit";
import activityReducer from "./activitiesReducer";
import searchReducer from "./searchReducers";

const reducers = combineReducers({
  activities: activityReducer,
  searchQuery: searchReducer
})

export default reducers