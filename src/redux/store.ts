import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';
import multiStepExample from 'redux/reducers/multiStepExample';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
    multiStepExample: multiStepExample.reducer,
  },
});

export interface RootState {
  [key: string]: Record<string, any>;
}
