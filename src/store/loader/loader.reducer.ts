import { createSlice } from '@reduxjs/toolkit';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: true,
};

export const slice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoader, hideLoader } = slice.actions;
export default slice.reducer;
