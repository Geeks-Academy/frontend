import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';
import form from './reducers/form';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
    form: form.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
