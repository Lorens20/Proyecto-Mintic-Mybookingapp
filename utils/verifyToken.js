import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, 'No estas autenticado.'))
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(createError(403,"Token no es valido"));
        req.user = user;
        next()
    });

};
//primero se loguea y despues se verifica
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            //envia error
            return next(createError(403, 'No estas autorizado!'));
        }
    });
}
export const isAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            //envia error
            return next(createError(403, 'No estas autorizado!'));
        }
    });
}