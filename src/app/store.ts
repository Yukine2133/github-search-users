import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../services/githubApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "../services/githubSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
