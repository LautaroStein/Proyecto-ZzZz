const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser');
const NftControllers = require("../controllers/NftController");
const Coinbase = require("../controllers/CoinbaseController");
const offerNftController = require('../controllers/offerNftController')
const passport = require('../config/passport')
const { Charge } = Coinbase
const { newUser, userLoged, authUser, favs, getUsers, updateUser, getUsersByDay, getSuscriptionByDay } = controllerUser;
const { getAllNft, loadUnNft, modifyAnNft, getOneNft, deleteNft, getNftsByUser } = NftControllers;
const { getAllOffers, postOffer, modifyOffer, getOneOffer, deleteOffer, getOffersByUser, getOffersByDay } = offerNftController

// stadistics controllers
Router.route('/usersByDay')
    .get(getUsersByDay)
Router.route('/suscriptionByDay')
    .get(getSuscriptionByDay)
Router.route('/offersByDay')
    .get(getOffersByDay)

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

Router.route('/nfts/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getNftsByUser)

Router.route('/offers/user/:id')
    .get(passport.authenticate('jwt', { session: false }), getOffersByUser)

Router.route('/user/auth')
    .get(passport.authenticate('jwt', { session: false }), authUser)

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

// Offer ROUTES
Router.route('/offers')
    .get(getAllOffers) // publica pero depende del valid (se ve en el controlador)
    .post(passport.authenticate('jwt', { session: false }), postOffer)

Router.route("/offer/:id")
    .get(getOneOffer)
    .put(passport.authenticate('jwt', { session: false }), modifyOffer)
    .delete(passport.authenticate('jwt', { session: false }), deleteOffer)

module.exports = Router