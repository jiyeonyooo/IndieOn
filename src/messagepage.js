import './messagepage.css';
import Iphone from './iphone.js';

function Messagepage() {
    return (
        <div className="messagepage">
            <div className="messagepage-left"></div>
            <div className="messagepage-chating">
                <Iphone />
            </div>
            <div className="messagepage-right"></div>
        </div>
    );
}

export default Messagepage;