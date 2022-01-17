// Importamos createDrawerNavigator
import {useEffect} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home"
import Store from "../screens/Store"
import NftSaved from "../screens/NftSaved"
import Cart from "../screens/Cart"
import Profile from "../screens/Profile"
import Logout from "../components/Logout" 

import nftActions from '../redux/actions/nftActions'
import userActions from "../redux/actions/userActions"
import { connect } from "react-redux";

// Instanciamos createDrawerNavigator para obtener todos sus Metodos y Componentes
const Drawer = createDrawerNavigator();


// DrawerNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-
const DrawerNavigator = ({ user, rdxAuth, rdxLogin, getUserNfts, getNfts })=>{

    // useEffect(() => {
    //     // 
    //     async function fetchData() {
    //         const user = await rdxAuth();
    //         getUserNfts(user.response._id)
    //         user.error && toast(user.error)
    //         const userLogged = {
    //             email: user.response.email,
    //             password: user.response.password
    //         }
    //         user.response && rdxLogin(userLogged)
    //     }
    //     localStorage.getItem('token') && fetchData();
    //     getNfts()
    // }, [rdxAuth, rdxLogin, getUserNfts])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <Drawer.Navigator>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Official Store" component={Store} />
              <Drawer.Screen name="NFT Saved" component={NftSaved} />
              <Drawer.Screen name="Cart" component={Cart} />
              <Drawer.Screen name="Profile" component={Profile} />
              <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducers.user
    }
  }
  
  const mapDispatchToProps = {
    rdxAuth: userActions.isAuth,
    rdxLogin: userActions.signIn,
    getNfts: nftActions.getNfts,
    getUserNfts: nftActions.getNftsByUser,
  }

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);