import React, { useState, useEffect } from 'react'
import Paypal from '../Cart/PayPalForm/PayPal'
const OfferCard = (props) => {

    const { clase, date, img, name, price, user, _id, type } = props.nftOffer

    const [color, setColor] = useState("")

    useEffect(() => {
        clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
    }, [clase])

    return (
        user && props.nftOffer.valid === 'accepted' ?
            <div className='card-container-offert-accept' style={{ border: `6px solid ${color}` }}>
                <div className='card-container-offert-img'><img src={img} alt={name} /></div>
                <div className='card-container-offert-text'>
                    <div>
                        <img src={user.userImg} alt={user.name} />
                        <p>@{user.name}</p>
                    </div>
                    <p>{name} - {type}</p>
                    <p>{price} ETH</p>
                    <div>
                        <p>Buy</p>
                        {/* <Paypal /> */}
                    </div>
                </div>
            </div> : null


    )
}

export default OfferCard
