import { configureStore } from "@reduxjs/toolkit";
import { jokeApi } from "../services/jokeApi";

export const store = configureStore({
  reducer: {
    [jokeApi.reducerPath]: jokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
