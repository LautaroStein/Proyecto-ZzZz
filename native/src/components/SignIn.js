import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

const SignIn = (props) => {

  const {navigate} = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const action =  () => email !== '' && password !== '' ? navigate('C_Uno') : alert("Completa los campos")

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