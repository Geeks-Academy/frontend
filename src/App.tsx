import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import SelectInput from 'components/atoms/SelectInput';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <SelectInput
        options={[
          { id: 'djskahd21ihi', value: 'React' },
          { id: 'jkfh83h2f233', value: 'Angular' },
          { id: 'j8f899292hd8', value: 'Angular2' },
          { id: '2hidh832dhd2', value: 'Redux' },
          { id: '1d23hdi9s8y2', value: 'Angular10' },
          { id: 'djskjskhjk2ahd21ihi', value: 'JQuery' },
          { id: 'jkfui23hiubh83h2f233', value: 'JQueryxd' },
          { id: 'j8f8jk3299292hd8', value: 'JQuerry123' },
          { id: '2hid99929h832dhd2', value: 'Angular3' },
          { id: '1d233hhj2389hdi9s8y2', value: 'Reduxx122' },
        ]}
        handleOnClick={(e) => console.log(e())}
        inputPlaceholder="Start typing.."
        selectCaption="Menu select"
        // isMulti
      />
    </>
  );
}

export default App;
