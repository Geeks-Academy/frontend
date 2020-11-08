import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  surname: {
    value: string;
    error: string;
  };
  name: {
    value: string;
    error: string;
  };
  age: {
    value: number;
    error: string;
  };
}

const initialState: InitialState = {
  surname: {
    value: '',
    error: '',
  },
  name: {
    value: '',
    error: '',
  },
  age: {
    value: 0,
    error: '',
  },
};

const exampleForm = createSlice({
  name: 'exampleForm',
  initialState,
  reducers: {
    setSurname: (state, { payload }) => {
      state.surname = { ...state.surname, ...payload };
    },
    setName: (state, { payload }) => {
      state.name = { ...state.name, ...payload };
    },
    setAge: (state, { payload }) => {
      state.age = { ...state.age, ...payload };
    },
  },
});

export default exampleForm;
