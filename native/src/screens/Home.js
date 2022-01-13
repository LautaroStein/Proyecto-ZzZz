import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView} from 'react-native';
import {styles} from "../styles/styles"


const Stack = createStackNavigator();


const Home = () => {
    return (

      
        <ScrollView style={styles.contenedorFondo} >
           <Text style={styles.text}>Holaaa</Text>
           
        </ScrollView>
        
    )
};


export default Home
