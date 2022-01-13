import Test from './Test'
import { StateProvider } from './src/core/StateProvider';
import reducer, {initialState} from './src/core/reducer'
// NavigationContainer es el encargado de escuchar los eventos de navegacion de los navigators 
import { NavigationContainer } from '@react-navigation/native';

// importaciones de los distintos navigators 👇
// Stack
import StackNavigator from './src/navigation/Stack'
// Drawer
import DrawerNavigator from './src/navigation/Drawer'
// BottomTab
import BottomTabNavigator from './src/navigation/BottomTab'

export  function App() {
  
  return(
    <StateProvider initialState={initialState } reducer = {reducer}>

    {/* Envuelvo mi app dentro del navigation Container 
    para que esta esté dotada de todas las propiedades de navegación 
    y poder estar a la escucha de los eventos de navegacion 
    */}

      <NavigationContainer>
      
        {/* <BottomTabNavigator />  */}
        <DrawerNavigator/>
        {/* <StackNavigator /> */}
      </NavigationContainer>
    </StateProvider> 
  )
}
export default App
