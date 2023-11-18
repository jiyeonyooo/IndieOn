import './iphone.css';
import headphone from './img/headphone.webp';
import { IoIosArrowBack } from "react-icons/io";
import { PiVideoCameraLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

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

                </div>
                <div className="iphone-chating-sending">
                    <div className="plus">
                        <FaPlus className="plus-btn"></FaPlus>
                    </div>
                    <div className="text">
                        <div className="text-content"></div>
                        <div className="text-sending-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iphone;