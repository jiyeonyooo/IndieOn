import './iphone.css';
import headphone from './img/headphone.webp';
import { IoIosArrowBack } from "react-icons/io";
import { PiVideoCameraLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import message1 from './img/message1.png';
import message2 from './img/message2.png';
import message3 from './img/message3.png';
import message4 from './img/message4.png';
import message5 from './img/message5.png';
import message6 from './img/message6.png';

function Iphone() {
    return (
        <div className="iphone">
            <div className="iphone-chating">
                <div className="iphone-chating-topbar">
                    <div className="iphone-chating-topbar_icons">
                        <IoIosArrowBack className="pre-icon" />
                        <div className="profile-center">
                            <div className="profile">
                                <img src={headphone} alt="profile-img"></img>
                            </div>
                        </div>
                        < PiVideoCameraLight className="videocall"></PiVideoCameraLight>
                    </div>
                    <div className="iphone-chating-topbar_name">김인디</div>
                </div>
                <div className="iphone-chating-main">
                    <img className="message-left" src={message1} alt="message1"></img>
                    <img className="message-left" src={message2} alt="message2"></img>
                    <img className="message-left" src={message3} alt="message3"></img>
                    <img className="message-left" src={message4} alt="message4"></img>
                    <img className="message-right" src={message5} alt="message5"></img>
                    <img className="message-right" src={message6} alt="message6"></img>
                </div>
                <div className="iphone-chating-sending">
                    <div className="plus">
                        <FaPlus className="plus-btn"></FaPlus>
                    </div>
                    <div className="text">
                        <div className="text-content"></div>
                        <div className="text-sending-btn">
                            <FaArrowUp className="upper-arrow"></FaArrowUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iphone;