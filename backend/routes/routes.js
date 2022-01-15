const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser');
const NftControllers = require("../controllers/NftController");
const Coinbase = require("../controllers/CoinbaseController");
const { Charge } = Coinbase
const { getAllNft, loadUnNft, modifyAnNft, getOneNft, deleteNft, getNftsByUser } = NftControllers;
const { newUser, userLoged, authUser, favs, getUsers, updateUser, editUser } = controllerUser;
const passport = require('../config/passport')





// Routes of NFT

Router.route('/nft')
    .get(getAllNft)
    .post(passport.authenticate('jwt', { session: false }), loadUnNft)
Router.route("/nft/:id")
    .get(getOneNft)
    .put(passport.authenticate('jwt', { session: false }), modifyAnNft)
    .delete(passport.authenticate('jwt', { session: false }), deleteNft)

// Routes of Users

Router.route('/auth/signUp')
    .post(validador, newUser)

Router.route('/auth/signIn')
    .post(userLoged)

// Router.route('/users/:id')
//     .get(getAllUsers)

Router.route('/nfts/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getNftsByUser)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

Router.route('/admin/user/:id')
    .put(editUser)
Router.route('/admin/users')
    .get(passport.authenticate('jwt', { session: false }), getUsers)
Router.route('/admin/user/:id')
    .put(passport.authenticate('jwt', { session: false }), updateUser)
// Favs

Router.route('/favs')
    .put(passport.authenticate('jwt', { session: false }), favs)

// Route of Coinbase

Router.route('/create-charge')
    .get(Charge)


module.exports = Router