import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'

const MarketPlace = () => {
    return (
        <ScrollView>
            <View >
                <Text style={marketPlaceStyle.title}>Collect & Sell Your NFTs</Text>
                <Image source={require('../../assets/mineria.png')} style={marketPlaceStyle.imagenMineria} />
                <Text style={marketPlaceStyle.title}>Live the new life check it out now.</Text>
            </View>
        </ScrollView>
    )
}
const marketPlaceStyle = StyleSheet.create({
        title:{
            width: '100%',
            height:'0.5rem',
            textAlign: 'center',
            margin: '1rem'
        },
        imagenMineria:{
            width: '100px',
             height: '100px',
        }
})

export default MarketPlace
