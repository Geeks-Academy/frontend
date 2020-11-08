import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';
import exampleForm from './reducers/exampleForm';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
    exampleForm: exampleForm.reducer,
  },
});

export interface RootState {
  [key: string]: Record<string, any>;
}
