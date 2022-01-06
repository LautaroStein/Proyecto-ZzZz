const Router = require("express").Router();
const validador = require("../config/validador");
const controllerUser = require('../controllers/controllerUser')

const {newUser,userLoged} = controllerUser

// Routes of Users

Router.route('/auth/signUp')
.post(validador,newUser)

Router.route('/auth/signIn')
.post(userLoged)


module.exports = Router