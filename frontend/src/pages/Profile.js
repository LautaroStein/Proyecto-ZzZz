import { FaEthereum, FaHouseUser } from "react-icons/fa"
import { GiWallet } from "react-icons/gi"
import { MdAdminPanelSettings } from "react-icons/md"
import { useState } from "react"
import User from "../components/Profile/User"
import Admin from "../components/Profile/Admin"
import Wallet from "../components/Profile/Wallet"
import Ethereum from "../components/Profile/Ethereum"

const Profile = () => {

    const [active, setActive] = useState("user")

    return (
        <>
            <div style={{height:"70px"}} ></div>
            <div className="total-profile-container">
                <div className="nav-profile-col">
                    <FaHouseUser onClick={()=>{setActive("user")}} className={active === "user" ? "active" : null}/>
                    <MdAdminPanelSettings onClick={()=>{setActive("admin")}} className={active === "admin" ? "active" : null}/>
                    <GiWallet onClick={()=>{setActive("wallet")}} className={active === "wallet" ? "active" : null}/>
                    <FaEthereum onClick={()=>{setActive("ethereum")}} className={active === "ethereum" ? "active" : null}/>
                </div>
                <div className="profile-render-constant">
                    {active === "user" ? <User /> : active === "admin" ? <Admin /> : active === "wallet" ? <Wallet /> : <Ethereum />}
                </div>
            </div>
        </>
    )
}

export default Profile
