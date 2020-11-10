/* eslint-disable no-case-declarations */
import Input from 'components/atoms/Input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer from 'redux/reducers/exampleForm';
import { RootState } from 'redux/store';
import * as yup from 'yup';

export const Step1 = (): JSX.Element => {
  const state = useSelector((s: RootState) => s.exampleForm);
  const dispatch = useDispatch();
  const { setSurname, setName } = reducer.actions;

  const validate = async (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'surname':
        dispatch(setSurname({ error: '' }));
        try {
          await yup
            .object()
            .shape({
              surname: yup.string().required('This field is required.'),
            })
            .validate({ surname: value });
        } catch (error: any) {
          dispatch(setSurname({ error: error.message }));
        }
        dispatch(setSurname({ value }));
        break;
      case 'name':
        dispatch(setName({ error: '' }));
        try {
          await yup
            .object()
            .shape({
              name: yup.string().required('This field is required.'),
            })
            .validate({ name: value });
        } catch (error: any) {
          dispatch(setName({ error: error.message }));
        }
        dispatch(setName({ value }));
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
            name="surname"
            placeholder="surname"
            label="Surname"
            value={state.surname.value}
            error={state.surname.error}
            onChange={validate}
          />
          <Input
            name="name"
            placeholder="name"
            label="Name"
            value={state.name.value}
            error={state.name.error}
            onChange={validate}
          />
        </div>
      </form>
    </>
  );
};
