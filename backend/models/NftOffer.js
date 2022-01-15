const mongoose = require("mongoose")

const nftOfferSchema = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
    clase: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    description: { type: String },
    valid: { type: String, default: 'pending' },
    date: { type: Date, default: Date.now }
})

const NftOffer = mongoose.model("nftoffer", nftOfferSchema)

module.exports = NftOffer