import react,{ useState,useEffect } from "react"
import Swal from 'sweetalert2'


const CardNFT = ({name, type, price, img, clase}) => {

const [color, setColor] = useState("")
const [backColor, setBackColor] = useState("")

useEffect(() => {
    clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
    clase === "Common" ? setBackColor("rgb(0, 234, 255)") : clase === "Rare" ? setBackColor("rgb(0, 160, 43)") : setBackColor("rgb(143, 7, 136)")
}, [clase])


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



const resLikesAndDislikes = async () => {
    setDisliked(!disliked)
    let like = {nftId:nftId, userId:user._id, boolean}
    if(!props.user._id) {
      Toast.fire({
        icon: 'error',
        title: 'You must be logged to like this post!'
      })  
    }else {
    let response = await favAndDisFavController(like)
    if(response.success){
      setBoolean(!boolean) 
        // getNfts()
    }
    // console.log(response)
    } 
    }



    return (
        <div className="contenedor-card-nft" style={{border: `6px solid ${color}`}} >
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
                            <div className="contenedor-buttons-nft">
                                <button className="button-compra-nft" style={{color: `${color}`,borderColor:`${color}`}}>
                                    Buy
                                    <span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span>
                                    </button>
                                <button className="button-fav-nft" onClick={resLikesAndDislikes} style={{color: `${color}`,borderColor:`${color}`}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                        </svg>
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

export default CardNFT
