import { Router } from "express";
import { getProductos , createProducto, updateProducto, deleteProducto, getProducto } from "../Controladores/productos.controladores.js";

const router = Router();

router.get('/productos', getProductos);
router.post('/productos', createProducto);
router.put('/productos', updateProducto);
router.delete('/productos/:id', deleteProducto);


router.get('/productos/:id', getProducto);


export default router;