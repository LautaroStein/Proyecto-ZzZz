import React from 'react'

const OfferCard = (props) => {
    return (
        props.nftOffer.valid === 'accepted' ?
            <div className='offer-card'>
                <div className='offer-card-header' style={{ backgroundImage: `url(${props.nftOffer.img})` }}>
                    <h2>{props.nftOffer.name}</h2>
                </div>
                <div className='offer-card-body'>
                    <div className='offer-card-atrr'>
                        <h2>{props.nftOffer.clase}</h2>
                        <h2>{props.nftOffer.type}</h2>
                    </div>
                    <div className='offer-card-price'>
                        <h2>{props.nftOffer.price}</h2>
                    </div>
                </div>
                <div className='offer-card-footer'>
                    <h2>{props.user.userName}</h2>
                    <button>view more</button>
                </div>
            </div> : null


    )
}

export default OfferCard
