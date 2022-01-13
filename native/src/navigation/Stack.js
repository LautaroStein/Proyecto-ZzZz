// Importamos createStackNavigator
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Store from "../screens/Store"
import MarketPlace from "../screens/MarketPlace"
import NftSaved from "../screens/NftSaved"
import Cart from "../screens/Cart"
import Profile from "../screens/Profile"


// Instanciamos createStackNavigator para obtener todos sus Metodos y Componentes
const Stack = createStackNavigator();


// StackNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-

const StackNavigator = ()=>{

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Official Store" component={Store} />
            <Stack.Screen name="Market Place" component={MarketPlace} />
            <Stack.Screen name="NFT Saved" component={NftSaved} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
    )
}

export default StackNavigator;