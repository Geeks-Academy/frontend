import Spinner from 'components/atoms/Spinner';
import React from 'react';
import { useSelector } from 'react-redux';
import loader from 'redux/reducers/loader';
import { RootState, store } from 'redux/store';
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
          <Input placeholder="name" label="Name" />
          <Input placeholder="surname" label="Surname" />
        </div>
        <div>
          <Input placeholder="age" label="Age" />
        </div>
        <div>
          <Input placeholder="fav" label="Favourite pet" />
        </div>
      </MultiStepForm>
    </>
  );
};

export default ReduxTestComponent;
