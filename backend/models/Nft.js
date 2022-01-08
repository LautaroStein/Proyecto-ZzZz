const mongoose = require("mongoose")

const nftSchema = new mongoose.Schema({
    clase: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    users: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    features: {
        name: { type: String },
        type: { type: String },
        habilities: [
            {
                name: { type: String },
                damage: { type: Number }
            },
        ],
        hp: { type: Number },
        maxHp: { type: Number },
        usersFeatures: [{
            exp: { type: Number },
            level: { type: Number },
            userId: { type: mongoose.Types.ObjectId, ref: 'user' }
        }]
    }
})

const Nft = mongoose.model("nft", nftSchema)

module.exports = Nft