const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const controllerUser = {

    // + al momento de registrar usuarios en nuestra aplicación, 
    // + hay situaciones que tenemos tener en cuenta  
    // + cuales son estas situaciones a tener en cuenta ?

    // - 1) que no haya usuarios repetidos
    // - 2) seguridad de la contraseña
    // - 3) validacion de datos


    newUser: async(req, res) => {
        
        let { name,lastName,email,password,userImg,phone, google,rol } = req.body      

        try {
            console.log(req.body)
            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste){
                return res.json({success: false, error:"The user already exists"})
            }else{

                const contraseñaHasheada = bcryptjs.hashSync(password, 10)

                const nuevoUsuario = new User({
                    name,
                    lastName,
                    email,
                    password:contraseñaHasheada,
                    userImg,
                    phone, 
                    google,
                    rol
                })

                console.log(nuevoUsuario)

                await nuevoUsuario.save()
                const token = jwt.sign({...nuevoUsuario}, process.env.SECRET_KEY)
                return res.json({success: true, response: {token,...nuevoUsuario}, error: null})
                
                
            }
        
        }catch(error){
            console.log(process.env.SECRET_KEY,error)
            res.json({success: false, response: null, error: error})
        }

        
    },

    userLoged: async(req, res)=>{
        const { email, password } = req.body
        if (email == '' || password == ''){
            return res.json({success: true, error:"Fields cannot be left empty"})
        }
        console.log(req.body)
        try {
            const usuarioExiste = await  User.findOne({email})
  
            if (!usuarioExiste){
                res.json({success: true, error:"Mail does not exist"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
                    res.json({success: true, response: {token,...usuarioExiste} ,error:null})
                   
                }else{
                    res.json({success: true, error:"The password is incorrect"})
                }
            }

        }catch(error){
            console.log(error);
            res.json({success: false, response: null, error: error})
        }
    },
    // verifyToken : (req, res) => {
    //     res.json({firstName: req.user.firstName, url:req.user.url, _id:req.user._id})
    // }


}

module.exports = controllerUser;