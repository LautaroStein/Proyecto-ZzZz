import CardNFT from "../components/CardNFT"
import { useState, useEffect } from "react";
import nftActions from "../redux/actions/nftActions"
import { connect } from "react-redux";
import ScrollContainer from 'react-indiana-drag-scroll'

const Store = (props) => {


    const [categoria, setCategoria] = useState("All");
    const [rareza, setRareza] = useState("All");

    useEffect(() => {
        props.nft()
        setNftDefault(props.nfts)
        setNft(props.nfts)
    }, [props.nfts])

    const [nftDefault, setNftDefault] = useState(props.nfts);
    const [nft, setNft] = useState(props.nfts);
    const [auxiliar, setAuxiliar] = useState(nft)

    const fetchear = () => {
        if (categoria !== "All") {
            let resultado = nftDefault.filter((e) => rareza === "All" ? e.type === categoria : e.type === categoria && e.clase === rareza)
            setNft(resultado)
            setAuxiliar(resultado)
        } else if (categoria === "All" && rareza !== "All") {
            let resultado = nftDefault.filter((e) => e.clase === rareza)
            setNft(resultado)
            setAuxiliar(resultado)
        } else {
            setNft(props.nfts)
            setAuxiliar(props.nfts)
        }
    }
    const fetchearRareza = () => {
        if (rareza !== "All") {
            let resultado = nft.filter((e) => categoria === "All" ? e.clase === rareza : e.type === categoria && e.clase === rareza)
            setAuxiliar(resultado)
        } else if (categoria !== "All" && rareza === "All") {
            let resultado = nftDefault.filter((e) => e.type === categoria)
            setAuxiliar(resultado)
        } else {
            setNft(props.nfts)
            setAuxiliar(props.nfts)
        }
    }

    return (
        <div>
            <div style={{ height: "120px" }} ></div>
            <div className="contenedor-store-public">
                <div>
                    <h1>Collect & Sell Your NFT</h1>
                    <p>Live the new life check it out now.</p>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
            <div className="contenedor-top-sellers-store">
                <div className="sellers">
                    <div className="title-top-sellers">
                        <p>Top Sellers</p>
                    </div>
                    <ScrollContainer className="container">
                        <div style={{ display: "flex" }} >
                            {
                                props.nfts.map((element, index) => {
                                    return (
                                        <CardNFT name={element.name} type={element.type} price={element.price} img={element.img} clase={element.clase} id={element._id} favorite={element.favs} userId={props.userId.userID} />
                                    )
                                })
                            }
                        </div>
                    </ScrollContainer>
                </div>
            </div>
            <div className="contenedor-top-sellers-store">
                <div className="sellers">
                    <div className="title-top-sellers flex-all-sellers">
                        <p>All</p>
                        <div className="filter-all-select">
                            <select onClick={fetchearRareza} onChange={(e) => { setRareza(e.target.value) }}>
                                <option value="All">All</option>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Mythical">Mythical</option>
                            </select>
                            <select onClick={fetchear} onChange={(e) => { setCategoria(e.target.value) }}>
                                <option value="All">All</option>
                                <option value="Gamer">Gamer</option>
                                <option value="Cyberpunk">Cyberpunk</option>
                                <option value="Arte">Arte</option>
                            </select>
                        </div>
                    </div>
                    <div className="contenedor-top-sellers-cards">
                        {
                            auxiliar.length > 0 ? auxiliar.map((element, index) => {
                                return (
                                    <CardNFT name={element.name} type={element.type} price={element.price} img={element.img} clase={element.clase} />
                                )
                            }) : <h1>NFT not found</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            nfts: state.nftReducers.nfts,
            userId: state.userReducers.user
        }
    )
}
const mapDispatchToProps = {
    nft: nftActions.getNfts
}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
