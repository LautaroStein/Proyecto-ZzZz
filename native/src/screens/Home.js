import React, {useState,useEffect}from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, Image} from 'react-native';
import {styles} from "../styles/styles"


const Stack = createStackNavigator();

const Home = () => {

    
    

    return (

       <ScrollView style={styles.contenedorFondo} >
           
           <View style={styles.contenedorGif}>
                    <View>
                        <Text style={styles.titulos}>#1 LARGEST NFT MARKET</Text>
                        <Text style={styles.text}>Discover, collect, and sell awesome NFTs</Text>
                        <Text style={styles.subtitulos}>ProyectZzZz is a collection with more than 4500 unique NFTs. You can easly find some NFT ProyectZzZz.</Text>
                    </View>
                    <View style={styles.cubo}>

                        <View style={styles.cuboRelleno}>
                            <Image
                            source= {require('../assets/RoundCube-Iridescent.png')}
                            style={{width: 25, height:25}}
                            />
                            <Image
                            source= {require('../assets/RoundCube-Iridescent.png')}
                            style={{width: 25, height:25, marginTop:35}}
                            />
                        </View>
                        
                        <Image
                            source= {require('../assets/RoundCube-Iridescent.png')}
                            style={{width: 25, height:25, marginRight:40}}
                        />
                        
                        <Image
                            source= {require('../assets/9778e9361fabdb7fd6eded5ec35102f5.gif')}
                            style={{width: 125, height:125, margin:15}}
                        />

                    </View>
            </View>

            {/* <View>
                <View >
                    <Text s>Optical Ilustration Art</Text>
                        <View>
                            <Text >Ending in</Text>
                            <Text >10m 12s</Text>
                        </View>
                    </View>
                </View> */}
                <View >
            <View >
                <Text>WHO WE ARE</Text>
                <Text >About us</Text>
                <View >
                    <View>
                        <View></View>
                        <View></View>
                    </View>
                    <View>
                        <Text >Building an open digital economy</Text>
                        <Text >At ProyectZzZz, we´re excited about a brand new type of digital good, called NFT (non-fungible token). NFTs have exciting properties: they´re unique. probably scarce, tradeable, and usable across multiple applications.</Text>
                        <Text >Just like physcal goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace.</Text>
                    </View>
                </View>
            </View>
        </View>
            



           <Text style={styles.text}>Holaaa</Text>
           
        </ScrollView>
        
    )
};


export default Home
