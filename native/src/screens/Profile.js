import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import ComponenteUno from '../components/ComponenteUno'

// Instanciamos createBottomTabNavigator para obtener todos sus Metodos y Componentes
const Tab = createBottomTabNavigator();


// BottomTabNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-

const Profile = ({ navigation}) => {
    return (
        <Tab.Navigator>

        {/* <Tab.Screen name="nose" component={ComponenteUno} /> */}
        {/* <Tab.Screen name="C_Dos" component={ComponenteDos} /> */}
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Signin" component={SignIn} />

    </Tab.Navigator>
    )
}

export default Profile
