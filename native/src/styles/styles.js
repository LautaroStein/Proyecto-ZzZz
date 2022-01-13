import {StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({

    contenedorFondo:{
      backgroundColor: "#14141d",
      flex: 1,
    },

    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#6804CD',
      width: '100%',
      height: 30,
    },
    text: {
      color: "red",
      fontWeight: 'bold',
      textAlign:"center"
    
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: 5,
        width:"20%"
        
      },
  });
