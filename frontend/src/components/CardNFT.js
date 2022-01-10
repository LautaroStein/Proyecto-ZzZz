import react,{ useState,useEffect } from "react"

const CardNFT = ({name, type, price, img, clase}) => {

const [color, setColor] = useState("")
const [backColor, setBackColor] = useState("")

useEffect(() => {
    clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
    clase === "Common" ? setBackColor("rgb(0, 234, 255)") : clase === "Rare" ? setBackColor("rgb(0, 160, 43)") : setBackColor("rgb(143, 7, 136)")
}, [clase])

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
                            <button className="button-compra-nft" style={{color: `${color}`,borderColor:`${color}`}}>
                                Buy
                                <span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span><span style={{backgroundColor:`${backColor}`}}></span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNFT
