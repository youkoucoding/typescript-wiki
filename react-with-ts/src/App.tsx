import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LinkeButton';
import MouseTracker from './components/MouseTracker';

interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#222',
  },
};

export const ThemeContext = React.createContext(themes.light);
// context 先创建 context 在用context.Provider包裹顶层（父）组件，子组件，通过useContext取得 context  实现数据传递

function App() {
  return (
    <div className='App'>
      <ThemeContext.Provider value={themes.dark}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Hello />
          <LikeButton />
          <MouseTracker />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
