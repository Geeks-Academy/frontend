import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface InitialLoaderState {
  [key: string]: string | boolean;
}

export const initialState: InitialLoaderState = {
  onestep: '',
  twostep: '',
  threestep: '',
  fourstep: '',
  fivestep: '',
  sixstep: '',
};

const multiStepExample = createSlice({
  name: 'multiStepExample',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<{ [key: string]: string | boolean }>) => {
      return { ...state, ...action.payload };
    },
    clearForm: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export default multiStepExample;
