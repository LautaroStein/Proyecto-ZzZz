const User = require('../models/User')
const Nft = require("../models/Nft");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const controllerUser = {

    newUser: async (req, res) => {

        let { name, lastName, email, password, userImg, phone, google, rol } = req.body

        try {
            const usuarioExiste = await User.findOne({ email })
            if (usuarioExiste) {
                return res.json({ success: false, error: "The user already exists" })
            } else {

                const contraseñaHasheada = bcryptjs.hashSync(password, 10)

                const nuevoUsuario = new User({
                    name,
                    lastName,
                    email,
                    password: contraseñaHasheada,
                    userImg,
                    phone,
                    google,
                    rol
                })


                await nuevoUsuario.save()
                const token = jwt.sign({ ...nuevoUsuario }, process.env.SECRET_KEY)
                return res.json({ success: true, response: { token, ...nuevoUsuario }, error: null })


            }

        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }


    },
    userLoged: async (req, res) => {

        const { email, password } = req.body
        if (email == '' || password == '') {
            return res.json({ success: true, error: "Fields cannot be left empty" })
        }
        try {
            const usuarioExiste = await User.findOne({ email })
            if (!usuarioExiste) {
                res.json({ success: false, error: "Mail does not exist" })
            } else {
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide || password === usuarioExiste.password) {
                    const token = jwt.sign({ ...usuarioExiste }, process.env.SECRET_KEY)
                    res.json({ success: true, response: { token, ...usuarioExiste }, error: null })

                } else {
                    res.json({ success: false, error: "The password is incorrect" })
                }
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    authUser: (req, res) => {
        try {
            const userAuth = req.user
            res.json({ success: true, response: userAuth, error: null })
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    // verifyToken : (req, res) => {
    //     res.json({firstName: req.user.firstName, url:req.user.url, _id:req.user._id})
    // }
    favs: async (req, res) => {
        const { nftId, bool } =  req.body
        console.log(nftId)
        try{
            const nft =  await Nft.findOneAndUpdate(
                {_id: nftId},
                bool ?
                { $addToSet: { favs: req.user._id } }
                :
                { $pull: { favs: req.user._id } },
                { new : true }
            )
            res.json({success:true, response: {nft:nft}, error:null})
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = controllerUser;