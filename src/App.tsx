import SkillCard from 'components/molecules/SkillCard';
import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <SkillCard title="WordPress" content="What's your skill level?" />
    </>
  );
}

export default App;
