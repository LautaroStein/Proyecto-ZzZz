const Transaction = require("../models/Transaction");

const sendMail = async (info) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "useremailverifyMindhub@gmail.com",
        pass: "mindhub2021",
      },
    });

    console.log(info)

    const template = `Purchase confirmed.`

    let remitente = "useremailverifyMindhub@gmail.com";

    let mailOptions = {
        from: remitente,
        to: info.userBuyer.email,
        subject: "Verificacion de email de usuario",
        html: template,
        attachments: [
          {
            filename: "logo-back.png",
            path: reqPath + "/assets/logo-back.png",
            cid: "logo-back",
          },
          {
            filename: "logo-white.png",
            path: reqPath + "/assets/logo-white.png",
            cid: "logo-white",
          },
        ],
      };
    
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
        } else {
          console.log("Message Sent");
        }
    });
};

const transactionController = {

    postTransaction: async (req, res) => {
        const transactionBody = req.body
        let transaction
        try {
            if (req.user) {
                // transaction = await new Transaction(transactionBody).save()
                await sendMail(transactionBody);
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