import React, { useState, useEffect } from 'react'
import Paypal from '../Cart/PayPalForm/PayPal'
const OfferCard = (props) => {

    const { clase, date, img, name, price, user, _id, type} = props.nftOffer

    const [color, setColor] = useState("")

    const [ modal, setModal ] = useState(false)

    useEffect(() => {
        clase === "Common" ? setColor("rgba( 0, 232, 255, 0.25 )") : clase === "Rare" ? setColor("rgba( 0, 160, 42, 0.55 )") : setColor("rgba( 143, 7, 136, 0.55 )")
    }, [clase])

    return (
        <>
        {user && props.nftOffer.public && props.nftOffer.valid === 'accepted' ?
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
                        <p onClick={() => setModal(true)}>Buy</p>
                        {/* <Paypal /> */}
                    </div>
                </div>
            </div> : null}
            {modal ? 
            <div onClick={() => setModal(false)} className='position-cienporciento'>
                <div className="modal-market-place-pagos">
                    <h1>estas en el modal</h1>
                    <p onClick={() => setModal(false)}> X </p>
                </div>
            </div>
            : null 

            }
        </>
    )
}

export default OfferCard