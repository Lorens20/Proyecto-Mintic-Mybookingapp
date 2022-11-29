import express from 'express'
import { getAllUsers, getUser } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();
//para loguearse
// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send('Estas logueado! ')
// });
// //para loguearse y poder eliminar la cuenta
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send('Estas logueado y puedes eliminar la cuenta! ')
// });
// for get user by id
router.get('/:id', verifyUser, getUser);

//for get all users -> para administra seccion
router.get('/', isAdmin, getAllUsers);

export default router;