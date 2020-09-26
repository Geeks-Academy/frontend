import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from 'store/loader/loader.reducer';

export type LoaderState = ReturnType<typeof loaderReducer>;

export default configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
