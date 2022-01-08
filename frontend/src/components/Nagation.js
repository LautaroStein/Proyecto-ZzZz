import { Link } from "react-router-dom";
import { AiFillHome, AiFillAppstore, AiFillSetting } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import react, {useState} from "react"

const Nagation = (props) => {


    console.log(props)
    return (
        <div className="navigation">
            <ul>
                <li className={props.location.pathname === "/" ? "active": null}>
                    <Link to="/">
                        <span className="icon-navigation"><AiFillHome /></span>
                        <span className="text-navigation">Home</span>
                    </Link>
                </li>
                <li className={props.location.pathname === "/Store" ? "active": null}>
                    <Link to="/">
                        <span className="icon-navigation"><AiFillAppstore/></span>
                        <span className="text-navigation">Official Store</span>
                    </Link>
                </li>
                <li className={props.location.pathname === "/market" ? "active": null}>
                    <Link to="/">
                        <span className="icon-navigation"><BiStore/></span>
                        <span className="text-navigation">Market Place</span>
                    </Link>
                </li>
                <li className={props.location.pathname === "/saved" ? "active": null}>
                    <Link to="/">
                        <span className="icon-navigation"><BsFillBookmarkHeartFill/></span>
                        <span className="text-navigation">NFT Saved</span>
                    </Link>
                </li>
                <li className={props.location.pathname === "/SignUp" || props.location.pathname === "/SignIn" || props.location.pathname === "/Profile" ? "active": null}>
                    <Link to={props.user !== "" ? "/Profile" : "/SignIn"}>
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
