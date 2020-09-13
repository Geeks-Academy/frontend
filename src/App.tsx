import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import MultiSelect from './components/atoms/MultiSelect/index';

function App(): JSX.Element {
  const hideOption = (e: any) => {
    const { value } = e.target;
    console.log(value);
    console.log(e.target);
  };

  return (
    <>
      <GlobalStyles />
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <MultiSelect isMulti={false} handleOnClick={hideOption} />
      </div>
    </>
  );
}

export default App;
