import React from 'react';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from 'store/loader/loader.reducer';

const Test = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(showLoader())}>
        show loader
      </button>
      <button type="button" onClick={() => dispatch(hideLoader())}>
        hide loader
      </button>
    </>
  );
};

export default Test;
