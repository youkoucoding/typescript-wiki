import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button disabled> hey how are you!</Button>{' '}
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hey how are you!
        </Button>
        <Button btnType={ButtonType.Link} href='https://www.google.com'>
          {' '}
          hey how are you!
        </Button>
      </header>
    </div>
  );
}

export default App;
