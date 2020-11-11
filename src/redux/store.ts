import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';
import multistep from 'redux/reducers/multistep';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
    multistep,
  },
});

export type RootState = ReturnType<typeof store.getState>;
