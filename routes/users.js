// const router = require ("express").Route();
// const {User, validate } = require("../routes/users");
// const bcrypt = require("bcrypt");

// route.post("/", async(req, res) => {
//     try{
//         const {error} = validate(req.body);
//         if (error)
//         return res.status(400).send({message:error.details[0].message});
    
//     const user = await User.findOne({email:req.body.email});
//     if(user)
//     return res.status(409).send({message:"Email ya existe"})
    
//     const salt = await bcrypt.genSalt(Number(process.env.SALT));
//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     await new User({...req.body, password: hashPassword}).save

//     }catch(error){

//     }
// })

// module.exports = router;




import express from 'express'
import { getAllUsers, getUser } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
// //para loguearse
// // router.get("/checkauth", verifyToken, (req, res, next) => {
// //     res.send('Estas logueado! ')
// // });
// // //para loguearse y poder eliminar la cuenta
// // router.get("/checkuser/:id", verifyUser, (req, res, next) => {
// //     res.send('Estas logueado y puedes eliminar la cuenta! ')
// // });
// // for get user by id
router.get('/:id', verifyUser, getUser);

// //for get all users -> para administra seccion
router.get('/', isAdmin, getAllUsers);

export default router;