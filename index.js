import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import cabinsRoutes from './routes/cabins.js'
import usersRoutes from './routes/users.js'
import cookieParser from 'cookie-parser'
import propertysRoutes from './routes/propertys.js'
import cors from 'cors'
//creando puerto para backend
const app = express();

dotenv.config();

const connect = async () => {
    
    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la BD");

    } catch(error) {
        throw error;
       
    }
}
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/cabins', cabinsRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/propertys', propertysRoutes)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Error";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    });
});






app.listen(5000, () => {
    connect();
    console.log('Conectado');
});