import React from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
// import { showMessage } from "react-native-flash-message"

const LogOut = (props) => {

    useEffect(() => {
        // showMessage({
        //     message: "See you next time!",
        //     description: "",
        //     type: "success",
        //     position: "top",
        //     statusBarHeight: "80", 
        //     backgroundColor: "purple"
        // })
        props.LogOut()
        props.navigation.navigate("Home")
    }, [])

    return null
    
}

const mapDispatchToProps = {
    LogOut: userActions.logout
}

export default connect(null, mapDispatchToProps)(LogOut)