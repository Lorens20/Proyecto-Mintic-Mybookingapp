//ceracion de la table en bd

import mongoose from "mongoose";

const CabinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        required:true
    },
    image2:{
        type:String,
        required:true
    },
    image3:{
        type:String,
        required:true
    },
    image4:{
        type:String,
        required:true
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    propertys: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    },
});
export default mongoose.model("Cabin", CabinSchema);
