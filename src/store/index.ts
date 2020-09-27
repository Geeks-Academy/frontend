import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from 'store/loader/loader.reducer';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
