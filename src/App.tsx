import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import DataInput from 'components/molecules/DateInput';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: ' 100vh',
        }}
      >
        <DataInput
          labelName="Label name"
          isOpen
          minYear={2000}
          maxYear={2050}
          handleDate={(date) => console.log(`Selected date: ${date}`)}
        />
      </div>
    </>
  );
}

export default App;
