//create table intro db

import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true,
        unique:true
    },
    desc : {
        type: String,
        required: true
    },
    maxPeople:{
        type: Number,
        required:true
    },
    propertyNumbers:[{number:Number, unavailableDates: {type: [Date]}}],
    
    },{
    timestamps:true

});
export default mongoose.model("Property", PropertySchema);
