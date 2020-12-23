import { configureStore } from '@reduxjs/toolkit';
import loader from 'redux/reducers/loader';
import multiStepExample from 'redux/reducers/multiStepExample';
import { coursesApi } from './services/courses';

export const store = configureStore({
  reducer: {
    loader: loader.reducer,
    multiStepExample: multiStepExample.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coursesApi.middleware),
});

export interface RootState {
  [key: string]: Record<string, any>;
}
