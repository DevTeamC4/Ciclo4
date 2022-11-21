import express from 'express';
import productosRoutes from './routes/productos.routes.js'
import fileUpdate from 'express-fileupload';

const app = express();
app.use(express.json());
app.use(fileUpdate({
    useTempFiles: true,
    tempFileDir: './files'

}))

app.use(productosRoutes);

export default app;