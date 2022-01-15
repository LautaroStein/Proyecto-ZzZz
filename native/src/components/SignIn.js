import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux"
import userAction from "../redux/actions/userActions"
import toasty from "./Toast";
const SignIn = (props) => {

  const {navigate} = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch()
  
  const action = async  () => {
    if (email == "" || password == ""){
      toasty('error','Fields cannot be left empty')
    }else{
      const user = {
        email: email,
        password: password
    }
      let resultado = await dispatch(userAction.signIn(user))
      
      if(resultado.succes == false){
        toasty('error',resultado.error)
      }else{
        toasty('success','Welcome back')
      }
    }
  }

  return (
    <ScrollView style={{padding: 10}}>
      <View style={styles.centerItems}>

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          defaultValue={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          secureTextEntry={true}
        />

      </View>
      
      <View style={styles.centerItems}>

        <TouchableOpacity onPress={action} style={styles.touchableHighlight} activeOpacity={0.2} underlayColor="gray">
          <Text> Sign In </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput:{
    height: 40,
    width:'70%',
    borderBottomWidth:2,
    borderBottomColor:'red',
    borderStyle:'solid', 
    marginBottom:50
  },
  centerItems:{
    width:'100%', 
    display: 'flex', 
    alignItems: 'center'
  },
  touchableHighlight:{
    padding: 10, 
    borderRadius:10
  }
  
})

export default SignIn;