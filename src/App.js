import verticalLogo from './img/indieon-logo-vertical.png';
import { HiMenu } from 'react-icons/hi'
import './App.css';
import Container from './container';
import Messagepage from './messagepage.js';
import Meaning from './meaning.js';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Container />
      </div>
      <Messagepage />
      <Meaning />
    </div>
  );
}

export default App;
