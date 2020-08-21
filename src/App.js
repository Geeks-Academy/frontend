import React from 'react';
import SocialButton from './shared/components/SocialButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SocialButton logo="github" text="Login as developer" />
      <SocialButton logo="google" text="Login as non developer" />
    </div>
  );
}

export default App;
