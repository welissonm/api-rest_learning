const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
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

const Use = mongoose.model('Use',UserSchema);
module.exports = User;