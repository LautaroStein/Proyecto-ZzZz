const Transaction = require("../models/Transaction");



const transactionController = {

    postTransaction: async (req, res) => {
        const transactionBody = req.body
        let transaction
        try {
            if (req.user) {
                transaction = await new Transaction(transactionBody).save()
                res.json({ response: transaction })

            } else {
                res.json({ response: 'You must be logged in' })
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, respuesta: "Oops! error" })
        }
    },
    getMaxCreator: async (req, res) => {
        Transaction.aggregate(
            [
                {
                    "$group": {
                        "_id": {
                            "seller": "$userSeller"
                        },
                        "mount": { $sum: "$mount" }
                    }
                }
            ],
            function (err, result) {
                res.json({ success: true, response: result })
            }
        );
    },
    getOneTransaction: async (req, res) => {
        let offer;
        const id = req.params.id;
        try {
            offer = await Transaction.findOne({ _id: id }).populate('user')
            res.json({ response: offer, success: true });
        } catch (error) {

            res.json({ success: false, respuesta: "Oops! error" })
        }
    },
    getRecents: async (req, res) => {
        Transaction.aggregate(
            [
                {
                    "$group": {
                        "_id": {

                            date: {
                                "year": { "$year": "$date" },
                                "month": { "$month": "$date" },
                                "day": { "$dayOfMonth": "$date" }
                            },
                            mount: "$mount",
                            nft: "$nftOffer",
                        },

                        $lookup: {
                            from: "nft",
                            localField: "nftoffer",
                            foreignField: "_id",
                            as: "nftOffer_doc"
                        }

                    },

                }
            ],
            function (err, result) {
                console.log(result);
                res.json({ success: true, response: result })
            }
        );
    },



}

module.exports = transactionController;