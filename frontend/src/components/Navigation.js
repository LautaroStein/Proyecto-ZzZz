import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiFillHome, AiFillAppstore, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const Navigation = (props) => {

    const [showCart, setShowCart] = useState(false)

    return (
        <>
            <div className="navigation">
                {/* <img src="./assets/logo.png" alt="logo" style={{height: "100%"}}/> */}
                <ul>
                    <li className={props.location.pathname === "/" ? "active" : null}>
                        <Link to="/">
                            <span className="icon-navigation"><AiFillHome /></span>
                            <span className="text-navigation">Home</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/Store" ? "active" : null}>
                        <Link to="/Store">
                            <span className="icon-navigation"><AiFillAppstore /></span>
                            <span className="text-navigation">Official Store</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/Market" ? "active" : null}>
                        <Link to="/Market">
                            <span className="icon-navigation"><BiStore /></span>
                            <span className="text-navigation">Market Place</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/Favs" ? "active" : null}>
                        <Link to="/Favs">
                            <span className="icon-navigation"><BsFillBookmarkHeartFill /></span>
                            <span className="text-navigation">NFT Saved</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/SignUp" || props.location.pathname === "/SignIn" || props.location.pathname === "/Profile" ? "active" : null}>
                        <Link to={props.user !== "" ? "/Profile" : "/SignIn"}>
                            <span className="icon-navigation"><FaUserAlt /></span>
                            <span className="text-navigation">Profile</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/Cart" ? "active" : null}>
                        <Link to="/Cart">
                            <span className="icon-navigation"><AiOutlineShoppingCart/></span>
                            <span className="text-navigation">Shopping Cart</span>
                        </Link>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
}

export default Navigation
