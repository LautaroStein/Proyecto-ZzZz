const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser');
const NftControllers = require("../controllers/NftController");
const favoritosControllers = require("../controllers/favoritosControllers");
const { getAllNft, loadUnNft, modifyAnNft, getOneNft, deleteNft, getNftsByUser } = NftControllers;
const { newUser, userLoged, authUser } = controllerUser;
const {  } = favoritosControllers;
const passport = require('../config/passport')





// Routes of NFT

Router.route('/nft')
    .get(getAllNft)
    .post(loadUnNft)
Router.route("/nft/:id")
    .put(modifyAnNft)
    .get(getOneNft)
    .delete(deleteNft)


// Routes of Users

Router.route('/auth/signUp')
    .post(validador, newUser)

Router.route('/auth/signIn')
    .post(userLoged)

Router.route('/nfts/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getNftsByUser)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)
    
    //Routes Favoritos
    
    Router.route('/user/favoritos')
        .put()


module.exports = Router