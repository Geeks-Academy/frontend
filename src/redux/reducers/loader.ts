import { createSlice } from '@reduxjs/toolkit';

interface InitialLoaderState {
  isLoading: boolean;
}

const initialState: InitialLoaderState = {
  isLoading: false,
};

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    toggleLoader: (state): void => {
      state.isLoading = !state.isLoading;
    },
  },
});

export default loader;
