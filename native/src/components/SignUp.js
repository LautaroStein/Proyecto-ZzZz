// import React, { useState } from 'react';
// import { Text, TextInput, View, TouchableHighlight, ScrollView, StyleSheet } from 'react-native';
// import SignIn from './SignIn'
// import Ionicons from '@expo/vector-icons/Ionicons'

// // Importamos createBottomTabNavigator
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Instanciamos createBottomTabNavigator para obtener todos sus Metodos y Componentes
// const Tab = createBottomTabNavigator();

// // Este es mi template de SignUp, lo podría haber hecho un Componente en un archivo diferente
// // tranquilamente de la misma manera que el Componente SignIn

// const SignUpTemplate = (props)=> {
//   console.log(props)
//   const {navigate} = props.navigation;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const action =  () => email !== '' && password !== '' ? navigate('C_Uno') : alert("Completa los campos")



//   return (
//     <ScrollView style={{padding: 10}}>
//       <View style={styles.centerItems}>

//         <TextInput
//           style={styles.textInput}
//           placeholder="Email"
//           onChangeText={text => setEmail(text)}
//           defaultValue={email}
//         />
//         <TextInput
//           style={styles.textInput}
//           placeholder="Password"
//           onChangeText={text => setPassword(text)}
//           defaultValue={password}
//           secureTextEntry={true}
//         />

//       </View>

//       <View style={styles.centerItems}>

//         <TouchableHighlight onPress={action} style={styles.touchableHighlight} activeOpacity={1} underlayColor="gray">
//           <Text> Sign Up </Text>
//         </TouchableHighlight>

//       </View>
//     </ScrollView>
//   );
// }


// // SignUpBT es el navigator que vamos a exportar y va a ser el encargado 
// // de mostrar las distintas vistas mediante eventos de navegación y las distintas pantallas
// // declaradas en el mismo, tambien es totalmente modificable su estilo y su forma de interaccion.-
// // para que se vea como se puede modificar tiene ejemplo con iconos que cambian de color segun su estado

// const SignUpBT = (props) => {
//   const nombre = "jose"
//   return(
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'SignUp') {
//                 iconName = focused
//                   ? 'person-add'
//                   : 'person-add-outline';
//               } else if (route.name === 'SignIn') {
//                 iconName = focused ? 'person-circle' : 'person-circle-outline';
//               }
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//           })}
//         >
//       <Tab.Screen name="SignUp">
//         {(props)=> <SignUpTemplate {...props} nombreUsuario={nombre}/> }
//       </Tab.Screen>
//       <Tab.Screen name="SignIn" component={SignIn} />
//     </Tab.Navigator>
//   )



// }
// const styles = StyleSheet.create({
//   textInput:{
//     height: 40,
//     width:'70%',
//     borderBottomWidth:2,
//     borderBottomColor:'red',
//     borderStyle:'solid', 
//     marginBottom:50
//   },
//   centerItems:{
//     width:'100%', 
//     display: 'flex', 
//     alignItems: 'center'
//   },
//   touchableHighlight:{
//     padding: 10, 
//     borderRadius:10
//   }

// })


// export default SignUpBT;



import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux"
import userAction from "../redux/actions/userActions"
import toasty from "./Toast";

const SignUp = (props) => {

  const dispatch = useDispatch()

  const { navigate } = props.navigation;

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userImage, setUserImage] = useState('');
  const [phone, setPhone] = useState('');

  const action = async () => {
    
    if ( lastName == "" || name == "" || email == "" || password == "" || userImage == "" || phone == "") {
      toasty('error', 'Fields cannot be left empty')
    } else {
      const user = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        userImg: userImage,
        phone: Number(phone)
    }
      let resultado = await dispatch(userAction.addUser(user))
     
      if (resultado.succes == false) {
        toasty('error', resultado.error)
      } else {
        toasty('success', 'User successfully registered')
      }
    }
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.centerItems}>

        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={text => setName(text)}
     
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
         
        />

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
    
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
         
          secureTextEntry={true}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Profile picture image Url"
          onChangeText={text => setUserImage(text)}
         
        />
        <TextInput
          style={styles.textInput}
          placeholder="Telephone number"
          onChangeText={text => setPhone(text)}
        
          
        />

      </View>

      <View style={styles.centerItems}>

        <TouchableOpacity onPress={action} style={styles.touchableHighlight} activeOpacity={0.2} underlayColor="gray">
          <Text> Sign Up </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    borderStyle: 'solid',
    marginBottom: 50
  },
  centerItems: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  touchableHighlight: {
    padding: 10,
    borderRadius: 10
  }

})

export default SignUp;