// import React,{ useState,useEffect } from "react"
import { View, Text, Button, StyleSheet, Image } from 'react-native'
// // import userActions from "../redux/actions/userActions";
// // import nftActions from "../redux/actions/nftActions";
// // import { connect } from "react-redux";
// import { BsFillBookmarkHeartFill} from "react-icons/bs"
// // import cartActions from "../redux/actions/cartActions";
// // import { toast } from 'react-toastify';

// const CardNFT = ({name, type, price, img, clase, favs, id, favorite, userId, nft, favClass, addNftToCart, nfts, cart}) => {

// const [color, setColor] = useState("")
// const [backColor, setBackColor] = useState("")

// useEffect(() => {
//     clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
//     clase === "Common" ? setBackColor("rgb(0, 234, 255)") : clase === "Rare" ? setBackColor("rgb(0, 160, 43)") : setBackColor("rgb(143, 7, 136)")
// }, [clase])

// const favsAndDisFavs = async() => {

//   let fav 

//   favorite.some(fav => fav === userId) 
//   ? 
//     fav = {
//       nftId : id,
//       bool:false
//     } 
//   :
//     fav = {
//       nftId : id,
//       bool:true
//     }
//     const retorn =  await favs(fav)

//     console.log(retorn)
//     if(retorn.succes){
//       nft()
//     }
//   }

const CardNFTNative = () =>{   return (
        <View style={CardNFTNativeStyle.contenedor}>
            <View style={CardNFTNativeStyle.contenedorTitulo}>
                <Text style={CardNFTNativeStyle.text}>CardNFTNative</Text>
            </View>
            <Image style={CardNFTNativeStyle.imagenNft} source={require('../../assets/nftHardcore.gif')}  />
            <View style={CardNFTNativeStyle.contenedorDatos}>
                    <Text style={CardNFTNativeStyle.text}>Class:</Text>
                    <Text style={CardNFTNativeStyle.text}>Type:</Text>
                    <Text style={CardNFTNativeStyle.text}>price:</Text>
            </View>
            <View style={CardNFTNativeStyle.contenedorButtons}>
                <Button style={CardNFTNativeStyle.button} title="Add to favourites 🤍" />
                <Button style={CardNFTNativeStyle.button} title="Add to cart" />
            </View>
        </View>
)}
//         <view style={`contenedor-card-nft ${favClass}`} style={{border: `6px solid ${color}`}} >
//             <view className="container-nft">
//                 <view className="ochenta-nft">
//                     <img src={img} alt={name}/>
//                     <h2>{name}</h2>
//                     <view className="contenedor-total-clasificacion">
//                         <view className="clasificacion-nft">
//                             <Text style={{color:`${color}`, fontWeight:"900"}}>Class: {clase}</Text>
//                             <Text>Type: {type}</Text>
//                         </view>
//                         <view className="contenedor-price-nft">
//                             <view>
//                                 <Text style={{color:"rgb(141, 141, 141)"}}>Price</Text>
//                                 <Text>{price} ETH</Text>
//                             </view>
//                             <view>
//                               {
//                                 favorite && favorite.some(fav => fav === userId) 
//                                 ?
//                                 <BsFillBookmarkHeartFill onClick={()=> favsAndDisFavs()} style={{color:`${color}`, fontSize:"30px", cursor:"pointer"}}/>
//                                 :
//                                 <BsFillBookmarkHeartFill onClick={()=> favsAndDisFavs()} style={{fontSize:"30px", cursor:"pointer"}}/>
//                               }
//                             </view>
//                             <view className="contenedor-buttons-nft">
//                                 <button className="button-compra-nft" style={{color: `${color}`,borderColor:`${color}`}} onClick={()=>{if(cart.some(element => element._id === id)){
//                                   toast.warning('NFT Already added to your cart', {
//                                     position: "top-right",
//                                     autoClose: 1500,
//                                     hideProgressBar: false,
//                                     closeOnClick: true,
//                                     pauseOnHover: true,
//                                     draggable: true,
//                                     progress: undefined,
//                                   }) 
//                                 }else{
//                                   addNftToCart(id, nfts)
//                                   toast.info('NFT add in your cart', {
//                                     position: "top-right",
//                                     autoClose: 1500,
//                                     hideProgressBar: false,
//                                     closeOnClick: true,
//                                     pauseOnHover: true,
//                                     draggable: true,
//                                     progress: undefined,})
//                                 }}}>
//                                   Add to Cart
//                                   <span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span>
//                                 </button>
//                             </view>
//                         </view>
//                     </view>
//                 </view>
//             </view>
//         </view>
//     )
// }
// // const mapStateToProps = (state) => {
// //   return {
// //     nfts : state.nftReducers.nfts,
// //     cart : state.cartReducers.cart
// //   }
// // }
// // const mapDispatchToProps = {
// //   favs : userActions.favs,
// //   nft : nftActions.getNfts,
// //   addNftToCart : cartActions.addNftToCart
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(CardNFT);


const CardNFTNativeStyle = StyleSheet.create({
    contenedor:{
        width:'95%',
        display: 'flex',
        // backgroundColor:'blue',
        alignSelf: 'center',
        
    },
    contenedorTitulo:{
        width:'95%',
        display: 'flex',
        // backgroundColor:'blue',
        alignSelf: 'center',
        padding:'0.5rem',
        
    },
    contenedorDatos:{
        width:'95%',
        padding:'0.5rem',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red',
        alignSelf: 'center',
        
    },
    contenedorButtons:{
        width:'95%',
        padding:'0.5rem',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        // backgroundColor:'red',
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
        // width: '200px',
    //     height: '200px',
    //     alignSelf: 'center',
    //     backgroundColor:'red',
    },
})


export default CardNFTNative
  

