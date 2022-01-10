import react,{ useState,useEffect } from "react"

const CardNFT = ({name, type, price, img, clase}) => {

const [color, setColor] = useState("")

useEffect(() => {
    clase === "Common" ? setColor("hsla(209, 100%, 10%, 0.774)") : clase === "Rare" ? setColor("rgb(1, 71, 1)") : setColor("#8f0788")
}, [clase])

    return (
        <div className="contenedor-card-nft" >
            <div style={{backgroundImage: `url(${img})`}} className="img-nft-total">
                <div className="text-nft-total" style={{backgroundColor: `${color}`}}>
                    
                </div>
            </div>
        </div>
    )
}

export default CardNFT
