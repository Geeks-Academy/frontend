import SkillCard from 'components/molecules/SkillCard';
import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <SkillCard titleText="WordPress" paragraphText="What's your skill level?" />
    </>
  );
}

export default App;
