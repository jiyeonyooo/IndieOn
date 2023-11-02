import verticalLogo from './indieon-logo-vertical.png';
import { HiMenu } from 'react-icons/hi'
import './App.css';
import Container from './container';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <header className="header">
          <HiMenu className="header-menu_icon"></HiMenu>
          <img src={verticalLogo} className="header-logo" alt="logo"></img>
        </header>
        <Container />
      </div>
    </div>
  );
}

export default App;
