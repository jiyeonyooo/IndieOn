import verticalLogo from './img/indieon-logo-vertical.png';
import { HiMenu } from 'react-icons/hi'
import './App.css';
import Container from './container';
import Messagepage from './messagepage.js';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Container />
      </div>
      <Messagepage />
    </div>
  );
}

export default App;
