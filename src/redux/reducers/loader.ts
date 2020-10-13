import { createSlice } from '@reduxjs/toolkit';

const initialState: { isLoading: boolean } = {
  isLoading: false,
};

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    show: (state): void => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = true;
    },
    hide: (state): void => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = false;
    },
  },
});

export default loader;
