import mongoose from "mongoose";

const  productoschema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    descripcion:{
        type: String,
        require: true,
        trim: true
    },
    precio:{
        type: Number,
        require: true,
        trim: true
    },
    image:{
        URL: String,
        public_id: String,
    },
    stock:{
        type: Number,
        require: true,
        trim: true
    }

});

export default mongoose.model('producto', productoschema);