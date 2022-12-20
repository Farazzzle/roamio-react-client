import {configureStore} from "@reduxjs/toolkit"
import activityReducer from "./reducers/activitiesReducer";
import searchReducer from "./reducers/searchReducers";


export const store = configureStore({
  reducer: {
    activities: activityReducer,
    searchQuery: searchReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch