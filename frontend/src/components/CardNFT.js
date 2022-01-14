import React,{ useState,useEffect } from "react"
import userActions from "../redux/actions/userActions";
import nftActions from "../redux/actions/nftActions";
import { connect } from "react-redux";
import { BsFillBookmarkHeartFill} from "react-icons/bs"
import cartActions from "../redux/actions/cartActions";
import { toast } from 'react-toastify';

const CardNFT = ({name, type, price, img, clase, favs, id, favorite, userId, nft, favClass, addNftToCart, nfts, cart}) => {

const [color, setColor] = useState("")
const [backColor, setBackColor] = useState("")

useEffect(() => {
    clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
    clase === "Common" ? setBackColor("rgb(0, 234, 255)") : clase === "Rare" ? setBackColor("rgb(0, 160, 43)") : setBackColor("rgb(143, 7, 136)")
}, [clase])

const favsAndDisFavs = async() => {

  let fav 

  favorite.some(fav => fav === userId) 
  ? 
    fav = {
      nftId : id,
      bool:false
    } 
  :
    fav = {
      nftId : id,
      bool:true
    }
    const retorn =  await favs(fav)

    console.log(retorn)
    if(retorn.succes){
      nft()
    }
  }
    return (
        <div className={`contenedor-card-nft ${favClass}`} style={{border: `6px solid ${color}`}} >
            <div className="container-nft">
                <div className="ochenta-nft">
                    <img src={img} alt={name}/>
                    <h2>{name}</h2>
                    <div className="contenedor-total-clasificacion">
                        <div className="clasificacion-nft">
                            <p style={{color:`${color}`, fontWeight:"900"}}>Class: {clase}</p>
                            <p>Type: {type}</p>
                        </div>
                        <div className="contenedor-price-nft">
                            <div>
                                <p style={{color:"rgb(141, 141, 141)"}}>Price</p>
                                <p>{price} ETH</p>
                            </div>
                            <div>
                              {
                                favorite && favorite.some(fav => fav === userId) 
                                ?
                                <BsFillBookmarkHeartFill onClick={()=> favsAndDisFavs()} style={{color:`${color}`, fontSize:"30px", cursor:"pointer"}}/>
                                :
                                <BsFillBookmarkHeartFill onClick={()=> favsAndDisFavs()} style={{fontSize:"30px", cursor:"pointer"}}/>
                              }
                            </div>
                            <div className="contenedor-buttons-nft">
                                <button className="button-compra-nft" style={{color: `${color}`,borderColor:`${color}`}} onClick={()=>{if(cart.some(element => element._id === id)){
                                  toast.warning('NFT Already added to your cart', {
                                    position: "top-right",
                                    autoClose: 1500,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                  }) 
                                }else{
                                  addNftToCart(id, nfts)
                                  toast.info('NFT add in your cart', {
                                    position: "top-right",
                                    autoClose: 1500,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,})
                                }}}>
                                  Buy
                                  <span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    nfts : state.nftReducers.nfts,
    cart : state.cartReducers.cart
  }
}
const mapDispatchToProps = {
  favs : userActions.favs,
  nft : nftActions.getNfts,
  addNftToCart : cartActions.addNftToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNFT);
  
