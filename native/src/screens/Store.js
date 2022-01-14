import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Store = () => {
    return (
        <View>
            <Text style={styles.store}>
               Store
            </Text>
        </View>
    )
}

export default Store

const styles = StyleSheet.create({

    store:{
        padding: 10,
        backgroundColor:"#f9f9f9",
        fontSize: 50
    }


})