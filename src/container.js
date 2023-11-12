import './container.css';
import lp from './img/indieon-lp.png';
import lacuna from './img/lacuna-1.jpg';
import lowhangingfruits from './img/lowhangingfruits-1.jpg';
import darin from './img/darin-1.jpg';
import nah from './img/nah.webp';
import joonhyung from './img/joonhyung.jpg';
import jeongaro from './img/jeongaro.webp'

import logo from './img/indieon-logo.png'
import { IoMdPause } from 'react-icons/io';
import { IoPlayBackSharp, IoPlayForwardSharp } from 'react-icons/io5'

function Container() {

    return (
        <div className="container">
            {/* <div className="container-album_covers">
                <div className="marquee-wrap">
                    <div className="marquee-1">
                        <img className="album_covers" src={lacuna} alt="lacuna-1"></img>
                        <img className="album_covers" src={darin} alt="darin"></img>
                        <img className="album_covers" src={nah} alt="nah"></img>
                        <img className="album_covers" src={lowhangingfruits} alt="lowhangingfruits-1"></img>
                        <img className="album_covers" src={joonhyung} alt="joonhyung"></img>
                        <img className="album_covers" src={jeongaro} alt="jeongaro"></img>
                    </div>
                    <div className="marquee-2">
                        <img className="album_covers" src={lacuna} alt="lacuna-1"></img>
                        <img className="album_covers" src={darin} alt="darin"></img>
                        <img className="album_covers" src={nah} alt="nah"></img>
                        <img className="album_covers" src={lowhangingfruits} alt="lowhangingfruits-1"></img>
                        <img className="album_covers" src={joonhyung} alt="joonhyung"></img>
                        <img className="album_covers" src={jeongaro} alt="jeongaro"></img>
                    </div>
                </div>
            </div> */}
            <div className="container-main">
                <div className="container-main-nav">
                    <ul className="container-main-nav-menu">
                        <li>HOME</li>
                        <li>이달의 인디온</li>
                        <li>나만의 인디온</li>
                    </ul>
                    <img src={logo} className="container-main-nav-logo" alt="logo"></img>
                </div>
                <div className="container-main-header">
                    <div className="container-main-svg">
                        <svg className="container-main_slogan">
                            <text x="50%" y="150px" fill="none">
                                <tspan className="regular">Let's Put</tspan>
                                <tspan className="bold"> ON</tspan>
                            </text>
                            <text x="50%" y="310px" fill="none">
                                <tspan className="bold">Ind-·e </tspan>
                                <tspan className="regular">Music</tspan>
                                <tspan className="emphasis"> !</tspan>
                            </text>
                        </svg>
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
        </div>
    );
}

export default Container;