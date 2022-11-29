// const router = require("express").Router();
// const { User } = require("../models/User");
// const Joi = require("joi");
// const { valid } = require("joi");
// const bcrypt = require("bcrypt")

// route.post("/", async(req,res)=>{
//     try{
//         const{error} = validate(req.body);
//         if(error)
//             return res.status(400).send({message:error.details[0].message});

//         const user = await User.findOne({email:req.body.email});
//         if(!user)
//             return res.status(401).send({message:"Contraseña o Email invalido"});
        
//         const validPassword = await bcrypt.compare(
//             req.body.password, user.password
//         );
//         if(!validPassword)
//             return res.status(401).send({message: "Contraseña o Email Invalido"});
        
//             const token = user.generateAuthToken();
//             res.status(200).send({data: token, message: "Logeado con exito"});

//     }catch(error){
//         res.status(500).send({message:"Error de servidor"});

//     }
// })
// const validate =(data)=>{
//     const schema = Joi.object({
//         email:Joi.string().email().required().label("Email"),
//         password:Joi.string().required().label("Password")
//     });
//     return schema.validate(data);
// }



// module.exports = router;




import expresss from 'express'
import { login, register } from '../controllers/auth.js';

const router = expresss.Router();
router.post('/register', register )
router.post('/login', login) 

export default router;