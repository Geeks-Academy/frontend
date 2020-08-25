import React from 'react';
import {ReactComponent as btnIcon} from 'assets/button-icon.svg';
import Button from 'components/atoms/Button';
import { EIconPosition } from 'components/atoms/Button/Button.model';


function App() {
  return (
    <div className="App">
      {/* <Button>Click</Button>
      <br />
      <Button icon={btnIconWhite} iconPos={EIconPosition.LEFT}>Click</Button>
      <br />
      <Button icon={btnIconWhite} iconPos={EIconPosition.RIGHT}>Click</Button>  */}
      <br />
      <Button icon={btnIcon} type="fill" iconPos={EIconPosition.NONE}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="fill" iconPos={EIconPosition.LEFT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="fill" iconPos={EIconPosition.RIGHT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="outline" iconPos={EIconPosition.NONE}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="outline" iconPos={EIconPosition.LEFT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="outline" iconPos={EIconPosition.RIGHT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="transparent" iconPos={EIconPosition.NONE}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="transparent" iconPos={EIconPosition.LEFT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="transparent" iconPos={EIconPosition.RIGHT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="disabled" iconPos={EIconPosition.NONE}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="disabled" iconPos={EIconPosition.LEFT}>Click</Button> 
      <br />
      <Button icon={btnIcon} type="disabled" iconPos={EIconPosition.RIGHT}>Click</Button> 
      <br />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
