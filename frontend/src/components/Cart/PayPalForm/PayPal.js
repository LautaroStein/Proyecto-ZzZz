import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { connect } from "react-redux"
import nftActions from '../../../redux/actions/nftActions'
const PayPal = ({ total, cart, user, updateNft, offerNft }) => {

    const [orderID, setOrderID] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState("");
    let descript = 'Your buy was'

    useEffect(() => {

        if (cart.length > 1) {

            cart.forEach(item => {
                descript += `,${item.name}`
            })

        } else {
            descript = `${cart[0].name}`
        }
        PayPalCheckOut()

    }, [total])

    const initialOptions = {
        "client-id": "AVCPlR0xQykftoUsT_0gfIOtpXIK0RPHMn5h0PycQMUm2rNx0tEKfGxOLgYbPNP0W3iNUwty8jZyWg0k",
        currency: "USD",
        intent: "capture"
    }

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: descript,
                    amount: {
                        value: total
                    }
                }
            ]
        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture()
            .then(function (details) {
                const { payer } = details;
                console.log('Capture result', details, JSON.stringify(details, null, 2))
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction' + transaction.status + ':' + transaction.id)
                setOrderID(transaction.id)
                if (cart.length > 1) {

                    cart.forEach(item => {
                        updateNft(item._id, { stock: item.stock - 1, users: [...item.users, user.userID] })
                    })

                } else {
                    updateNft(cart[0]._id, { stock: cart[0].stock - 1, users: [...cart[0].users, user.userID] })
                }
            })
        // se actualiza el offerNFT

    }
    const onCancel = (data) => {
        console.log('you have cancelled the payment', data)
    }
    const onError = (data, actions) => {
        setErrorMessage('An Error ocurred with your payment')
    }
    const PayPalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}>

                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />

            </PayPalScriptProvider>
        )
    }

    return (
        <PayPalCheckOut className="paypal-button-store" />
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.cartReducers.total,
        cart: state.cartReducers.cart,
        user: state.userReducers.user
    }
}
const mapDispatchToProps = {
    updateNft: nftActions.updateNft
}
export default connect(mapStateToProps, mapDispatchToProps)(PayPal)