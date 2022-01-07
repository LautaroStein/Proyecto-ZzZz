const Router = require("express").Router();
const NftControllers=require("../controllers/NftController")
const{getAllNft,loadUnNft, modifyAnNft,getOneNft }=NftControllers
Router.route('/nft')
.get(getAllNft)
.post(loadUnNft)
Router.route("/nft/:id")
.put( modifyAnNft) 
.get(getOneNft)






module.exports = Router