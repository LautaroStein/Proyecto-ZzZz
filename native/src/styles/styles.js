import {StyleSheet } from 'react-native';

export  const styles = StyleSheet.create({

    contenedorFondo:{
      backgroundColor: "#14141d",
      flex: 1,
    },

    contenedorGif:{
      
      flexDirection: "column",
      alignItems: "flex-end",
      padding:10,
      margin:20
    },
    cubo:{
      flex:1,
      flexDirection:"row",
     
      alignItems: "center",
    },

    cuboRelleno:{
      marginRight:20
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
      color: "#fff",
      fontWeight: 'bold',
      textAlign:"justify",
      flex:1,
      margin:1.5,
    },

  titulos:{
    color: "#fff",
    fontSize:10,
    fontWeight: 'bold',
    margin:5
  },
  subtitulos:{ 
    color: "white",
    fontSize:14,
    textAlign:"justify",
    margin:10
  },
  building:{
    margin:10,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center", 
   },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: 5,
        width:"20%"
        
      },
  });
