const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser');
const NftControllers = require("../controllers/NftController");
const { getAllNft, loadUnNft, modifyAnNft, getOneNft, deleteNft, getNftsByUser } = NftControllers;
const { newUser, userLoged, authUser,getAllUsers } = controllerUser;
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

Router.route('/users/:id')
    .get(getAllUsers)

Router.route('/nfts/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getNftsByUser)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)



module.exports = Router