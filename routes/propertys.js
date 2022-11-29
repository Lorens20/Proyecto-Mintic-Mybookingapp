import express from 'express';
import { createProperty, getAllPropertys, getProperty } from '../controllers/propertys.js';
import { isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// para agg nueva propiedad para admin 
router.post('/:cabinId', isAdmin, createProperty);

//para obtener propiedaad por id
router.get('/:id', getProperty);

//para obtener todas las propiedades
router.get('/', getAllPropertys);

export default router;