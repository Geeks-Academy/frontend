import { createSlice } from '@reduxjs/toolkit';

export interface DataForm {
  surname: string;
  name: string;
  age: number | null;
}

interface InitialFormState {
  data: DataForm;
}

const initialState: InitialFormState = {
  data: {
    surname: '',
    name: '',
    age: null,
  },
};

const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export default form;
