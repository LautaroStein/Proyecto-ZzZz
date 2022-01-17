import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import CardNFTNative from '../components/CardNftNative';
// import Swiper from 'react-native-swiper'

const Store = () => {
    return (
        <ScrollView style={storeStyle.mainView}>
                <View style={storeStyle.view}>
                    <Text style={storeStyle.titleWelcome}>Collect & Sell Your NFTs</Text>
                    <Image source={require('../../assets/mineria.png')} style={storeStyle.imagenMineria} />
                    <Text style={storeStyle.titleWelcome}>Live the new life check it out now.</Text>
                </View>
                <View style={storeStyle.view2}>
                    <Text style={storeStyle.title2}>Top Sales</Text>
                        {/* <Swiper> */}
                            {/* <View> */}
                                {/* <CardNFTNative/> */}
                            {/* </View>                            */}
                        {/* </Swiper> */}
                <View>
                    <View>
                                <CardNFTNative/>
                    {/* <Image source={require('../../assets/mineria.png')} style={storeStyle.imagenMineria} /> */}
                    </View>
                </View>
                </View>
                <View style={storeStyle.view3}>
                    <Text style={storeStyle.title2}>All</Text>
                                <CardNFTNative/>
                </View>
    </ScrollView>
    )
}


const storeStyle = StyleSheet.create({
    mainView:{
        backgroundColor:'black',
    },
    view:{
        backgroundColor:'black',
        margin:'0.5rem',        
        // display: 'flex',
        // flexDirection:'row',
    },
    view2:{
        backgroundColor:'black',
        marginTop:'1rem',
    },
    view3:{
        backgroundColor:'black',
        marginTop:'1rem',
    },
    titleWelcome:{
        color:'white',
        width: '100%',
        height:'0.5rem',
        textAlign: 'center',
        margin: '1rem',
    },
    title:{
        color:'white',
        width: '100%',
        height:'0.5rem',
        textAlign: 'center',
        margin: '1rem',
        fontSize:'0.3rem',
        fontWeight:'bold',
    },
    title2:{
        fontWeight:'bold',
        fontSize:'1rem',
        color:'white',
        width: '100%',
        textAlign: 'left',
        margin: '1rem'
    },
    imagenMineria:{
        width: '100px',
        height: '100px',
        alignSelf: 'center',
    },
    
})
export default Store
