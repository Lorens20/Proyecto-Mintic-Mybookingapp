import expresss from 'express'
import { bycity, bytype, createCabin, getAllCabins, getCabin } from '../controllers/cabins.js';
import { isAdmin } from '../utils/verifyToken.js';


const router = expresss.Router();

//para agg nuevo cabins y agg nueva propiedad
router.post('/', isAdmin, createCabin );

   
//para obetner cabaña por id
router.get('/find/:id', getCabin );


// para obtener todos las cabañas
router.get('/', getAllCabins  );
router.get('/bycity', bycity  );
router.get('/bytype', bytype  );
export default router;