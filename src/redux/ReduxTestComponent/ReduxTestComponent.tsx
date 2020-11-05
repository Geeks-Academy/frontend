import React from 'react';
import loader from 'redux/reducers/loader';
import { RootState, store } from 'redux/store';
import { useSelector } from 'react-redux';
import Spinner from '../../components/atoms/Spinner';
import Input from '../../components/atoms/Input';
import MultiStepForm from '../../components/molecules/MultiStepForm/MultiStepForm';

const ReduxTestComponent = (): JSX.Element => {
  const showLoader = useSelector((state: RootState) => state.loader.isLoading);
  const { toggleLoader } = loader.actions;
  return (
    <>
      {showLoader && <Spinner />}
      <button type="button" onClick={() => store.dispatch(toggleLoader())}>
        {!showLoader ? 'Show loader' : 'Hide Loader'}
      </button>
      <MultiStepForm>
        <div>
          <Input placeholder="surname" label="Surname" />
          <Input placeholder="name" label="Name" />
        </div>
        <Input placeholder="age" label="Age" />
      </MultiStepForm>
    </>
  );
};

export default ReduxTestComponent;
