import { useEffect } from "react"
import { connect } from "react-redux"
import nftActions from "../../redux/actions/nftActions"
import offerActions from "../../redux/actions/offerActions"
import ScrollContainer from 'react-indiana-drag-scroll'
import CardNFT from "../CardNFT"

const Wallet = ({user, getNft, userNfts, userOffers, getOffersByUser}) => {

    console.log(user, userNfts, userOffers)

    useEffect(() => {
        getNft(user.userID)
        getOffersByUser(user.userID)
    }, [])


    return (
        <div className="container-wallet-profile-total">
            <h2>Your unics NFTs collections</h2>
            <ScrollContainer className="container">
                {userNfts &&
                    userNfts.map(e => {
                        return(
                            <CardNFT name={e.name} type={e.type} price={e.price} img={e.img} clase={e.clase} id={e._id} favorite={e.favs} store={false} />
                        )
                    })
                }
            </ScrollContainer>
            <h2>Your offerts public NFTs </h2>
            <div>
                {userOffers && 
                userOffers.map(e => {
                    return(
                        e.public ?
                        <div>
                            <h3>{e.name}</h3>
                        </div>
                        : null
                    )
                })}
            </div>
            <h2>Your offerts NFTs dont post</h2>
            <div>
                {userOffers &&
                userOffers.map(e => {
                    return(
                        e.public ? null : 
                        <div>
                            <h3>{e.name}</h3>
                        </div>
                    )
                })
                    
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.userReducers.user,
        userNfts : state.nftReducers.userNfts,
        userOffers : state.offerReducers.userOffers
    }
}

const mapDispatchToProps = {
    getNft : nftActions.getNftsByUser,
    getOffersByUser : offerActions.getOffersByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
