import React, {useEffect, useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { connect } from "react-redux"

const PayPal = ({total}) => {

    const [ success, setSuccess ] = useState(false)
    const [ orderID, setOrderID ] = useState(false)
    const [ ErrorMessage, setErrorMessage ] = useState("");

    useEffect(() => {

        PayPalCheckOut()

    }, [total])

    const initialOptions = {
        "client-id": "AVCPlR0xQykftoUsT_0gfIOtpXIK0RPHMn5h0PycQMUm2rNx0tEKfGxOLgYbPNP0W3iNUwty8jZyWg0k",
        currency: "USD",
        intent: "capture"
    }

    console.log(success)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units:[
                {
                    description:"items",
                    amount: {
                        value: total
                    }
                }
            ]
        })
    }

    console.log(createOrder)

    const onApprove = (data, actions) => {
        return actions.order.capture()
        .then(function (details){
            const { payer } = details;
            setSuccess(true);
            console.log('Capture result', details, JSON.stringify(details, null, 2))
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction'+ transaction.status + ':' + transaction.id)
            setOrderID(transaction.id)
        })
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
        <PayPalCheckOut className="paypal-button-store"/>
    )
}

const mapStateToProps = (state) => {
    return {
        total : state.cartReducers.total
    }
}

export default connect(mapStateToProps, null)(PayPal)
