import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
