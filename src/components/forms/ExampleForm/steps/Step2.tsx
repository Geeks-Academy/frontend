import Input from 'components/atoms/Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import exampleFormReducer from 'redux/reducers/exampleForm';
import { RootState } from 'redux/store';

import * as yup from 'yup';

export const Step2 = (): JSX.Element => {
  const state = useSelector((s: RootState) => s.exampleForm);
  const dispatch = useDispatch();
  const { setAge } = exampleFormReducer.actions;

  const validate = async (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'age':
        dispatch(setAge({ error: '' }));
        try {
          await yup
            .object()
            .shape({
              age: yup
                .number()
                .positive('This value should be positive')
                .required('This field is required.'),
            })
            .validate({ age: value });
        } catch (error: any) {
          dispatch(setAge({ error: error.message }));
        }
        dispatch(setAge({ value }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      <form>
        <div>
          <Input
            name="age"
            placeholder="age"
            label="Age"
            type="number"
            onChange={validate}
            value={state.age.value}
          />
          {state.age.error && <p style={{ color: 'red' }}>{state.age.error}</p>}
        </div>
      </form>
    </>
  );
};
