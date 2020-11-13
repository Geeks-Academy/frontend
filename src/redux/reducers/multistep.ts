import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface InitialLoaderState {
  [key: string]: string | boolean;
}

const initialState: InitialLoaderState = {
  onestep: '',
  twostep: '',
  threestep: '',
  fourstep: '',
  fivestep: '',
  sixstep: '',
  testcheckbox: false,
};

const multistep = createSlice({
  name: 'multistep',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<{ [key: string]: string | boolean }>) => {
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = multistep;

export const { updateForm } = actions;

export default reducer;
