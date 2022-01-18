// Importamos createDrawerNavigator
import {useEffect} from 'react'
import { Text, View } from "react-native"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from "../screens/Home"
import Store from "../screens/Store"
import NftSaved from "../screens/NftSaved"
import Cart from "../screens/Cart"
import Profile from "../screens/Profile"
import Logout from "../components/Logout" 

import AsyncStorage from '@react-native-async-storage/async-storage'

import nftActions from '../redux/actions/nftActions'
import userActions from "../redux/actions/userActions"
import { connect } from "react-redux";

import { styles } from '../styles/styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props)=>{

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
    //     AsyncStorage.getItem('token') && fetchData();
    //     getNfts()
    // }, [rdxAuth, rdxLogin, getUserNfts])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      getData()
    },[])

    const getData = async () => {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        props.logInAsync(token)
      }
    }

    const CustomDrawerContent = (props) => {
      return (
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContainer}>
            <Text style={styles.drawerTitle}>Welcome to ProjectZzZz</Text>
            {props.token ? <Text style={styles.drawerName}>{props.user.name}</Text> : null}
          </View>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
      )
    }

    return (
        <Drawer.Navigator 
        drawerContent={props => <CustomDrawerContent {...props}/>}
        screenOptions={{
          drawerStyle:{
            backgroundColor: '#14141d',
          },
          drawerActiveBackgroundColor:"#1f1f36",
          drawerInactiveTintColor: 'white',
          drawerContentStyle:{
                margin: 45,
               backgroundColor:'white'}
        }}
        >
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Official Store" component={Store} />
              <Drawer.Screen name="NFT Saved" component={NftSaved} />
              <Drawer.Screen name="Cart" component={Cart} />
              <Drawer.Screen name="Profile" component={Profile} />
              {props.token ? <Drawer.Screen name="Logout" component={Logout} /> : null}
        </Drawer.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducers.user
    }
  }
  
  const mapDispatchToProps = {
    logInAsync: userActions.logInAsync,
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)

