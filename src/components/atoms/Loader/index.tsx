import React from 'react';
import { useSelector } from 'react-redux';

const Loader = (): JSX.Element => {
  const loader = useSelector((state: any) => state.loader);

  return (
    <>
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
