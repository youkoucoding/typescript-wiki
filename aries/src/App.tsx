import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Menu defaultIndex={0}>
          <MenuItem>link one</MenuItem>

          <MenuItem>link Two</MenuItem>

          <MenuItem>link Three</MenuItem>
        </Menu>
        <Button disabled> hey how are you!</Button>{' '}
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Link} href='https://www.google.com'>
          hey how are you!
        </Button>
        <Button btnType={ButtonType.Default} href='https://www.google.com'>
          hey how are you!
        </Button>
        <Button btnType={ButtonType.Danger} href='https://www.google.com'>
          hey how are you!
        </Button>
        <Button btnType={ButtonType.Primary} href='https://www.google.com'>
          hey
        </Button>
        <Button autoFocus>AutoFocus</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert('test pass!');
          }}
        >
          OnClick
        </Button>
      </header>
    </div>
  );
}

export default App;
