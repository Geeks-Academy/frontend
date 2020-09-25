import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import SelectInput from 'components/molecules/SelectInput';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <SelectInput
        selectCaption="MultiSelect"
        inputPlaceholder="Start typing.."
        handleOnClick={(e) => console.log(e())}
        options={[
          { id: '1', value: 'React' },
          { id: '2', value: 'React1' },
          { id: '3', value: 'Angular' },
          { id: '4', value: 'Angular2' },
          { id: '5', value: 'React2' },
        ]}
        isMulti
      />
    </>
  );
}

export default App;
