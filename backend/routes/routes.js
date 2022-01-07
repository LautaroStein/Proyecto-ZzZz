const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser');
const NftControllers=require("../controllers/NftController");
const{getAllNft,loadUnNft, modifyAnNft,getOneNft,deleteNft }=NftControllers;
const {newUser,userLoged} = controllerUser;





// Routes of NFT

Router.route('/nft')
.get(getAllNft)
.post(loadUnNft)
Router.route("/nft/:id")
.put( modifyAnNft) 
.get(getOneNft)
.delete(deleteNft)

// Routes of Users

Router.route('/auth/signUp')
.post(validador,newUser)

Router.route('/auth/signIn')
.post(userLoged)


module.exports = Router