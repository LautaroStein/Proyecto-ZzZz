const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: String, required:true},
    lastName:{type: String, default:" "},
    email:{type: String, required:true},
    password:{type: String, required:true},
    userImg:{type: String, required:true},
    phone:{type: Number, required:true},
    google:{type:Boolean, default:false},
    payments:[{
        number:{type: Number},
        name:{type: String},
        expiration:{type: Number},
        security:{type: String},
        bank:{type: String},
        paymentMethod:{type: Boolean}
    }],
    rol: {type:String, default:'usuario'}
})

const User = mongoose.model('user',userSchema)

module.exports = User