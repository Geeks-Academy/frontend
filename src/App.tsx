import React, { useEffect, useState } from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import MultiSelect from './components/atoms/MultiSelect/index';

function App(): JSX.Element {
  const [array, setArray] = useState<any[]>([]);

  const handleOnClick = (callback: () => any[]): void | undefined => {
    setArray(callback());
  };

  useEffect(() => {
    // console.log(array)
  }, [array.length]);

  return (
    <>
      <GlobalStyles />
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <MultiSelect isMulti handleOnClick={handleOnClick} />
      </div>
    </>
  );
}

export default App;
