const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    userName:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    photoUrl:{
        type:String,
        required:false
    },
    grupo:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;