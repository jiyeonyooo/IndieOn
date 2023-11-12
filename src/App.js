import verticalLogo from './img/indieon-logo-vertical.png';
import { HiMenu } from 'react-icons/hi'
import './App.css';
import Container from './container';
import Textslider from './text-slider';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Container />
      </div>
      {/* <Textslider /> */}
      <div className="temp"></div>
    </div>
  );
}

export default App;
