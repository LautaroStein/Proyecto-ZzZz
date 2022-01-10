import { Link } from "react-router-dom";
import { AiFillHome, AiFillAppstore, AiFillSetting } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import react, {useState} from "react"

const Nagation = () => {

    const [active, setActive] = useState("home")

    return (
        <div className="navigation">
            <ul>
                <li className={active === "home" ? "active": null} onClick={()=>{
                    setActive("home")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><AiFillHome /></span>
                        <span className="text-navigation">Home</span>
                    </Link>
                </li>
                <li className={active === "store" ? "active": null} onClick={()=>{
                    setActive("store")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><AiFillAppstore/></span>
                        <span className="text-navigation">Official Store</span>
                    </Link>
                </li>
                <li className={active === "market" ? "active": null} onClick={()=>{
                    setActive("market")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><BiStore/></span>
                        <span className="text-navigation">Market Place</span>
                    </Link>
                </li>
                <li className={active === "saved" ? "active": null} onClick={()=>{
                    setActive("saved")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><BsFillBookmarkHeartFill/></span>
                        <span className="text-navigation">NFT Saved</span>
                    </Link>
                </li>
                <li className={active === "profile" ? "active": null} onClick={()=>{
                    setActive("profile")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><FaUserAlt/></span>
                        <span className="text-navigation">Profile</span>
                    </Link>
                </li>
                {/* <li className={active === "settings" ? "active": null} onClick={()=>{
                    setActive("settings")
                }}>
                    <Link to="/">
                        <span className="icon-navigation"><AiFillSetting/></span>
                        <span className="text-navigation">Settings</span>
                    </Link>
                </li> */}
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default Nagation
