import React from 'react';
import loader from 'redux/reducers/loader';
import { RootState, store } from 'redux/store';
import { useSelector } from 'react-redux';
import Spinner from 'components/atoms/Spinner';

const ReduxTestComponent = (): JSX.Element => {
  const showLoader = useSelector((state: RootState) => state.loader.isLoading);
  const { toggleLoader } = loader.actions;
  return (
    <>
      {!showLoader ? null : <Spinner />}
      <button type="button" onClick={() => store.dispatch(toggleLoader())}>
        {!showLoader ? 'Show loader' : 'Hide Loader'}
      </button>
    </>
  );
};

export default ReduxTestComponent;
