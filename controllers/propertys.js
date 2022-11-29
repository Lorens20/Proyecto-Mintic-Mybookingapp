import Cabin from "../models/Cabin.js";
import Property from "../models/Property.js";

export const createProperty = async (req, res, next) => { 
    const cabinId = req.params.cabinId;
    const newProperty = new Property(req.body);

    try{
        const savedProperty = await newProperty.save();

        try{
            //busca por ciudad y agrega propiedad
            await Cabin.findByIdAndUpdate(cabinId, {
                $push:{propertys: savedProperty._id}
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedProperty);

    }catch(err){
        next(err);
    }
}

export const getProperty = async (req, res, next) => {
    try{
        const property= await Property.findById(req.params.id);
        res.status(200).json(property);
    } catch(err){
        next(err);
    }
};

export const getAllPropertys = async (req, res, next) => {
    try{
        const propertys = await Property.find();
        res.status(200).json(propertys);

    }catch(err){
        next(err);
    }
};