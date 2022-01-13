// Importamos createDrawerNavigator
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home"
import Store from "../screens/Store"
import MarketPlace from "../screens/MarketPlace"
import NftSaved from "../screens/NftSaved"
import Cart from "../screens/Cart"
import Profile from "../screens/Profile"


// Instanciamos createDrawerNavigator para obtener todos sus Metodos y Componentes
const Drawer = createDrawerNavigator();


// DrawerNavigator es el navigator que vamos a exportar y va a ser el encargado 
// de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-
const DrawerNavigator = ()=>{




    return (
        <Drawer.Navigator>
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Official Store" component={Store} />
              <Drawer.Screen name="Market Place" component={MarketPlace} />
              <Drawer.Screen name="NFT Saved" component={NftSaved} />
              <Drawer.Screen name="Cart" component={Cart} />
              <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;