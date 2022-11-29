//ceracion de la table en bd
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const joi = require('joi');
// const passwordComplexity = require("joi.password-complexity")

// const UsersSchema = new mongoose.Schema({
//     firsName:{type:String,required:true},
//     lastName:{type:String,required:true},
//     email:{type:String,required:true},
// });

// UserSchema.methods.generateAuthToken = function (){
//     const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
//     return token

// };
// const User = mongoose.model("User",UsersSchema);

// const validate = (data) =>{
//     const schema = Joi.object({
//         firstName:Joi.string().required().label("Firs Name"),
//         lastName:joi.string().required().label("Last Name"),
//         email:Joi.String().required().label("Email"),
//         password:passwordComplexity().required().label("Password")
//     });
//     return validate(data)
// };

// module.exports = {User,validate};





import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},{
    timestamps:true

});
export default mongoose.model("Users", UsersSchema);

