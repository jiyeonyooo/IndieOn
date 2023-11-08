import './container.css';
import lp from './img/indieon-lp.png';
import lacuna from './img/lacuna-1.jpg';
import lowhangingfruits from './img/lowhangingfruits-1.jpg';
import darin from './img/darin-1.jpg';
import { IoMdPause } from 'react-icons/io';
import { IoPlayBackSharp, IoPlayForwardSharp } from 'react-icons/io5'

function Container() {
    return (
        <div className="container">
            <div className="container-album_covers">
                <div className="marquee-wrap">
                    <img className="album_covers" src={lacuna} alt="lacuna-1"></img>
                    <img className="album_covers" src={lowhangingfruits} alt="lowhangingfruits-1"></img>
                    <img className="album_covers" src={darin} alt="darin"></img>
                </div>
            </div>
            <div className="container-main">
                <div className="container-main_slogan">
                    <span className="regular">Let's Put </span>
                    <span className="bold">ON</span><br></br>
                    <span className="bold">Ind-·e </span>
                    <span className="regular">Music!</span>
                </div>
                <div className="container-main_playerbar">
                    <img src={lp} className="lp" alt="logo"></img>
                </div>
                <div className="container-main_playertab">
                    <IoPlayBackSharp className="back"></IoPlayBackSharp>
                    <IoMdPause className="pause"></IoMdPause>
                    <IoPlayForwardSharp className="forward"></IoPlayForwardSharp>
                </div>
            </div>
        </div>
    );
}

export default Container;