import './messagepage.css';
import Iphone from './iphone.js';
import phrase1 from './img/messagepage-left-phrase1.png';
import phrase2 from './img/messagepage-left-phrase2.png';

function Messagepage() {
    return (
        <div className="messagepage">
            <div className="messagepage-left">
                <img className="messagepage-left-phrase1" src={phrase1} alt="phrase1"></img>
                <div className="messagepage-left-phrase2">숨어서 듣는 명곡?</div>
            </div>
            <div className="messagepage-chating">
                <Iphone />
            </div>
            <div className="messagepage-right">
                <div className="messagepage-right-phrase1">
                    <p>숨겨져 있어서<br></br>못들은 명곡 !</p>
                </div>
            </div>
        </div>
    );
}

export default Messagepage;