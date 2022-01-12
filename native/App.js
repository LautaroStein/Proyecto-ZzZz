import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainStack from "./navigation/MainStack"


function App() {
  return(

      <SafeAreaView style={{flex: 1}}>
      
          <MainStack/>
      
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f0f0f0",
    flex:1
  },
  texto:{ 
    color: "blue",
     fontSize:17,
    padding: "10%"
  }
})

export default App

