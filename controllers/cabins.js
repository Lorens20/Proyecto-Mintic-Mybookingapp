import Cabin from "../models/Cabin.js";

export const createCabin = async (req, res, next) => {
    const newCabin = new Cabin(req.body);

    try{

        const savedCabin = await newCabin.save();
        res.status(200).json(savedCabin);

    } catch(err){

        next(err);
    }
}

export const getCabin = async (req, res, next) => {
    try{

        const cabin = await Cabin.findById(req.params.id);
        res.status(200).json(cabin);

    } catch(err){

        next(err);
    }
};

export const getAllCabins = async (req, res, next) => {
    const {min, max, ...others} = req.query;
    try{

        const cabins = await Cabin.find({...others, price: {$gt: min || 1, $lt: max || 399999}}).limit(req.query.limit);
        res.status(200).json(cabins);

    } catch(err){

        next(err);
    
    }
};

export const bycity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try{

        const list = await Promise.all(cities.map(city =>{
            return Cabin.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(err){

        next(err);
    
    }
};

export const bytype = async (req, res, next) => {
    try {
        const allCabin = await Cabin.countDocuments({type: "Cabaña"});
        const allApartm = await Cabin.countDocuments({type: "Apartamento"});
        const allCupula = await Cabin.countDocuments({type: "Cupula"});
        const allMinicasa = await Cabin.countDocuments({type: "Minicasa"});
       

        res.status(200).json([
            {type:"Cabaña", count: allCabin},
            {type:"Apartamento", count: allApartm},
            {type:"Cupula", count: allCupula},
            {type:"Minicasa", count: allMinicasa}
        ]);
      
    }catch(err) {
        next(err);

    }
};