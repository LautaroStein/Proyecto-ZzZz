import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native'
// import { BsArrowDownCircle, BsFileEaselFill } from "react-icons/bs"
// import { useEffect, useState} from "react"
import { connect } from "react-redux"
// import CardNFT from "../components/Cart/CardNFT"
import cartActions from "../redux/actions/cartActions"
// import PayPal from "../components/Cart/PayPalForm/PayPal"

const Cart = () => {
    return (
 <ScrollView style={cartStyle.mainView}>
     <View >
            <View  style={cartStyle.view1}>
                <Text style={cartStyle.title}>Get 10% off your first NFT purchase by entering the following discount code.</Text>                
            </View>
            <View>
                    <View style={cartStyle.CardNFTStyle.contenedor} >
                    <View style={cartStyle.CardNFTStyle.contenedorTitulo}>
                        <Text style={cartStyle.CardNFTStyle.text}>name nft</Text>
                    </View>
                    {/* <Image style={cartStyle.CardNFTStyle.imagenNft} source={img} alt="nftImg" /> */}
                    <View style={cartStyle.CardNFTStyle.contenedorDatos}>
                            <Text style={cartStyle.CardNFTStyle.text}>Class: </Text>
                            <Text style={cartStyle.CardNFTStyle.text}>Type: </Text>
                            <Text style={cartStyle.CardNFTStyle.text}>100 ETH</Text>
                    </View>
                    <View style={cartStyle.CardNFTStyle.contenedorButtons}>
                        <Button  style={cartStyle.CardNFTStyle.button} title="delete 🗑" />
                    </View>
                </View>
        </View>
        <View style={cartStyle.summary}>
        <Text style={cartStyle.title}>SUMMARY</Text> 
        </View>
     </View>
</ScrollView>
    )
}

const cartStyle = StyleSheet.create({
    mainView:{
        backgroundColor:'black',
    },
    view1:{
            color:'black',
        margin:'1rem',
    },
    // titleWelcome:{
    //     color:'white',
    //     width: '100%',
    //     height:'0.5rem',
    //     textAlign: 'center',
    //     margin: '1rem',
    // },
    title:{
        color:'white',
        width: '100%',
        height:'0.5rem',
        textAlign: 'center',
        margin: '1rem',
        fontSize:'1rem',
        fontWeight:'bold',
    },
 
    CardNFTStyle:{
        contenedor:{
            width:'95%',
            display: 'flex',
            backgroundColor:'blue',
            alignSelf: 'center',
            
        },
        contenedorTitulo:{
            width:'95%',
            display: 'flex',
            backgroundColor:'blue',
            alignSelf: 'center',
            padding:'0.5rem',
            
        },
        contenedorDatos:{
            width:'95%',
            padding:'0.5rem',
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:'green',
            alignSelf: 'center',
            
        },
        contenedorButtons:{
            width:'95%',
            padding:'0.5rem',
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            backgroundColor:'red',
            alignSelf: 'center',
            
        },
        text:{
            color:'white',
            alignSelf: 'center',
        },
        imagenNft:{
            margin:'0.5rem',        
            width: '250px',
            height: '250px',
            alignSelf: 'center',
        },
        button:{
            padding: '0.5rem',
        },
    }
    
})


const mapStateToProps = (state) => {
    return {
        cart : state.cartReducers.cart,
    }
}
const mapDispatchToProps = {
    clearCartAll : cartActions.removeAllFromCart,
    deleteOneNFT : cartActions.removeOneFromCart,
    setTotalPrice : cartActions.setTotalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)



// const Cart = ({cart, clearCartAll, deleteOneNFT, setTotalPrice}) => {

//     const [ code, setCode ] =  useState(false)
//     const [ discount, setDiscount ] = useState("")
    
//     const descounts = [ "#246FIRSTPURCHASENFTCART", "#AGUANTELOSNFT2022", "ESTASFULLPICADOPAA" ]
    
//     let subTotal = 0

//     const [ total, setTotal ] = useState(subTotal)

//     useEffect(()=> {
//         discountes()
//     }, [cart, subTotal])
    
//     cart.forEach(item => {
//         return subTotal = subTotal + item.price
//     })   

//     console.log(subTotal)

//     const discountes = () => {
//         if(descounts.some(item => item === discount)){
//             setTotal(subTotal - (subTotal * 0.1)) 
//         }else{
//             setTotal(subTotal)
//         }
//     }   

//     useEffect(() => {
//         setTotalPrice(total)
//     }, [total])

//     return (
//         <>
//             <div style={{ height: "70px" }} ></div>
//             <div className="contenedor-total-shopping">
//                 <div className="contenedor-left-shopping">
//                     <div className="shippoing-left-divone"><h2>Get 10% off your first NFT purchase by entering the following discount code.</h2></div>
//                     <div className="shippoing-left-divtwo"><p>YOUR CART ({cart.length})</p> <p onClick={() => clearCartAll()}>CLEAR CART</p></div>
//                     <div className="shippoing-left-divtree">
//                         {cart.map((element, i) => {
//                             return <CardNFT key={i} data={element} remove={deleteOneNFT} />
//                         })}
//                     </div>
//                 </div>
//                 <div className="contenedor-rigth-shopping">
//                     <div><h2>SUMMARY</h2></div>
//                     <div></div>
//                     <div><p>DO YOU HAVE A PROMO CODE?</p><BsArrowDownCircle onClick={()=> { setCode(!code) }}/>
//                     {code ?<><input type="text" placeholder="#246FIRSTPURCHASENFTCART" onChange={(e)=> setDiscount(e.target.value)}></input><button onClick={()=> discountes()} style={{heigth:"40px", width: "40px"}}>enter</button></> : null }
//                     </div>
//                     <div></div>
//                     <div><p>SUBTOTAL</p><p>${subTotal}</p></div>
//                     <div></div>
//                     <div><p>Once payment is made, no refunds are accepted, the process may take 1 to 10 minutes to be completed successfully.</p></div>
//                     <div></div>
//                     <div><p>TOTAL</p><p>${total}</p></div>
//                     <div></div>
//                     <div>
//                         <PayPal clearCartAll={clearCartAll}/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         cart : state.cartReducers.cart,
//     }
// }
// const mapDispatchToProps = {
//     clearCartAll : cartActions.removeAllFromCart,
//     deleteOneNFT : cartActions.removeOneFromCart,
//     setTotalPrice : cartActions.setTotalPrice
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
