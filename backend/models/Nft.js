const mongoose = require("mongoose")

const nftSchema = new mongoose.Schema ({
    clase: {type: String, required: true},
    img: {type: String, required: true},
    price:{type:Number, required: true},
    stock:{type:Number, required:true}
})

const Nft = mongoose.model("nft", nftSchema)

module.exports =Nft