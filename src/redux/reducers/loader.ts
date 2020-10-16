import { createSlice } from '@reduxjs/toolkit';

const initialState: { isLoading: boolean } = {
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
