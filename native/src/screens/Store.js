import React from 'react';
// import { View, Text, StyleSheet } from 'react-native'
import { Text, TextInput, View, ScrollView, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';

const Store = () => {
    return (
        <View>
            <Text style={styles.store}>
                Mi mercado
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