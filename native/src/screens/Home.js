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
                    <Image
                            source= {require('../assets/lauty1.png')}
                            style={{width: 125, height:125, margin:15, borderRadius:20, position: 'absolute', left:-90,opacity:0.5}}
                        />

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
                            style={{width: 125, height:125, margin:15, borderRadius:20}}
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
                <View style={styles.contenedorGif}>
            <View >
                <Text style={styles.titulos}>WHO WE ARE</Text>
                <Image
                            source= {require('../assets/lauty2.png')}
                            style={{width: 125, height:125, margin:15, borderRadius:20, position: 'absolute', right:-100,opacity:0.5}}
                        />
                <Text style={styles.text}>About us</Text>
                <View >
                    <View>
                        <View></View>
                        <View></View>
                    </View>
                    <View>
                    <Text style={styles.subtitulos}>Building an open digital economy.</Text>
                        <View style={styles.building}>
                        
                        <Image
                            source= {require('../assets/about.jpeg')}
                            style={{width: 150, height:150,  borderRadius:15}}
                        />
                         <Image
                            source= {require('../assets/aboutraro.png')}
                            style={{width: 75, height:75, borderRadius:15, position: 'relative', left:-30 }}
                        />
                        </View>
                        <Text style={styles.subtitulos}>At ProyectZzZz, we´re excited about a brand new type of digital good, called NFT (non-fungible token). NFTs have exciting properties: they´re unique. probably scarce, tradeable, and usable across multiple applications.</Text>
                        <Text style={styles.subtitulos}>Just like physcal goods, you can do whatever you want with them! You could throw them in the trash, gift them to a friend across the world, or go sell them on an open marketplace.</Text>
                    </View>
                    <Image
                            source= {require('../assets/lauty3.png')}
                            style={{width: 125, height:125, margin:15, borderRadius:20, position: 'absolute', left:-100,opacity:0.5}}
                        />
                </View>
            </View>
        </View>

           
        </ScrollView>
        
    )
};


export default Home
