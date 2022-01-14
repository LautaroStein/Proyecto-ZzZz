import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

const Store = () => {
    return (
        <ScrollView style={storeStyle.mainView}>
        <View style={storeStyle.view}>
            <Text style={storeStyle.title}>Collect & Sell Your NFTs</Text>
            <Image source={require('../../assets/mineria.png')} style={storeStyle.imagenMineria} />
            <Text style={storeStyle.title}>Live the new life check it out now.</Text>
        </View>
        <View style={storeStyle.view2}>
            <Text style={storeStyle.title2}>Top Sellers</Text>
            <Image source={require('../../assets/mineria.png')} style={storeStyle.imagenMineria} />
        </View>
        <View style={storeStyle.view3}>
            <Text style={storeStyle.title2}>All</Text>
            <Image source={require('../../assets/mineria.png')} style={storeStyle.imagenMineria} />
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
    },
    view2:{
        backgroundColor:'black',
        marginTop:'1rem',
    },
    view3:{
        backgroundColor:'black',
        marginTop:'1rem',
    },
    title:{
        color:'white',
        width: '100%',
        height:'0.5rem',
        textAlign: 'center',
        margin: '1rem'
    },
    title2:{
        color:'white',
        width: '100%',
        height:'0.5rem',
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
