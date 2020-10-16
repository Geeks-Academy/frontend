import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
