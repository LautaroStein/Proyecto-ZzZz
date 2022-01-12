const { resources } = require('coinbase-commerce-node')
const { Charge } = resources

const Coinbase = {

    Charge : async (req,res) => {
        const chargeData = {
            name: 'NFT',
            description : 'Awesome NFT',
            local_price: {
                amount : '0.2',
                currency :  'USD'
            },
            pricing_type: 'fixed_price',
            metadata : {
                customer_id : 'id_random',
                customer_name: 'name random'
            },
        }

        const charge = await Charge.create(chargeData)

        res.send(charge)
    }

}


module.exports = Coinbase;