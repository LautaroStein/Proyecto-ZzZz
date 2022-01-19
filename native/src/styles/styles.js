import {StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({
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
    drawerContainer: {
      backgroundColor: '#001a33',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
    },
    drawerTitle: {
      color: 'white',
      fontWeight: 'bold',
      
    },
    drawerName: {
      color: '#96faaf',
      fontWeight: 'bold',
    },
    drawerImage: {
      height: 80, 
      width: 80, 
      borderRadius: 40, 
      marginTop: 10
    },
    drawerContainerImage: {
      backgroundColor: '#001a33',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    }
  });
