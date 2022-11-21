import Producto from "../models/Producto.js";
import { uploadImage } from "../libreries/cloudinary.js";
import fs from 'fs-extra';

export const getProductos = async (req, res) => {

    try {
        //throw new Error('this is my own error');
        const productos = await Producto.find()
        res.send(productos)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Error ' + error.message);
    }
};

export const createProducto = async (req, res) => {
    try {
        const { name, descripcion, precio, stock } = req.body;
        var image = null;

        if (req.files.image){
            const fileUpdate = await uploadImage(req.files.image.tempfilePath)
            await fs.remove(req.file.image.tempfilePath)
            image = {
                url: fileUpdate.secure_url,
                public_id: fileUpdate.public_id
            }
        }
  
        const nuevoProducto = new Producto({ name, descripcion, precio, image, stock });
        //este guarda en la base de datos
        await nuevoProducto.save()
        return res.json(nuevoProducto)
    } catch (error) {
        return res.status(500).json('Error ' + error.message);
    }
};

export const updateProducto = async (req, res) => {
    try {
        const actualizaProductos = await Producto.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {
            new: true,
        }
        );
        return res.json(actualizaProductos);
    } catch (error) {
        return res.status(500).json('Error ' + error.message);
        
    }
};


export const deleteProducto = async (req, res) => {
    try {
        const deleteProducto = await Producto.findByIdAndDelete(req.params.id)
        if (!deleteProducto) {
            return res.sendStatus(404);
        } else {
            return res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json('Error ' + error.message);

    }
};

export const getProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.sendStatus(404);
        } else {
            return res.json(producto);
        }
    } catch (error) {
        return res.status(500).json('Error: ' + error.message);
    }
};



