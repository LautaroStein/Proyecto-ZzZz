import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiFillHome, AiFillAppstore, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";
import { MdBookmarkAdd } from 'react-icons/md'
import { toast } from 'react-toastify';


const Navigation = (props) => {


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
                        {(props.user.role === "user" || props.user.role === "moderator" || props.user.role === "admin") ?
                            <Link to="/Favs">
                                <span className="icon-navigation"><BsFillBookmarkHeartFill /></span>
                                <span className="text-navigation">NFT Saved</span>
                            </Link>
                            :
                            <Link to="" onClick={() =>
                                toast.info('You must be logged in to view this section', {
                                    position: "top-right",
                                    autoClose: 2500,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })}>
                                <span className="icon-navigation"><MdBookmarkAdd /></span>
                                <span className="text-navigation">NFT Saved</span>
                            </Link>
                        }
                    </li>

                    <li className={props.location.pathname === "/Game" ? "active" : null}>
                        <Link to="/Game">
                            <span className="icon-navigation"><SiRiotgames /></span>
                            <span className="text-navigation">Game</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/Cart" ? "active" : null}>
                        <Link to="/Cart">
                            <span className="icon-navigation"><AiOutlineShoppingCart /></span>
                            <span className="text-navigation">Shopping Cart</span>
                        </Link>
                    </li>
                    <li className={props.location.pathname === "/SignUp" || props.location.pathname === "/SignIn" || props.location.pathname === "/Profile" ? "active" : null}>
                        <Link to={props.user !== "" ? "/Profile" : "/SignIn"}>
                            <span className="icon-navigation"><FaUserAlt /></span>
                            <span className="text-navigation">Profile</span>
                        </Link>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </>
    )
}



export default Navigation
