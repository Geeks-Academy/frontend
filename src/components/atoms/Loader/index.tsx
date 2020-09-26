import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, showLoader } from 'store/loader/loader.reducer';

const Loader = (): JSX.Element => {
  const loader = useSelector((state: any) => state.loader);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(showLoader())}>
        SHOW
      </button>
      <button type="button" onClick={() => dispatch(hideLoader())}>
        HIDE
      </button>
      {loader.isLoading && (
        <div className="loader-container">
          <div className="spinner-border loader" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
