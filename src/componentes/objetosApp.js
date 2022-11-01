import { useState } from "react";
import Objetos from "./objetos";
import '../styles/objetos.css';

export default function ObjetosApp() {
    //usestate es un hook para generar eventos
    //etiqueta =Getter ; setetiqueta = Setter
    const [etiqueta, setEtiqueta] = useState('');
    const [cuerpo, setCuerpo] =useState([]);

    function handleEnviar(e) {
        e.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta, 
            stock: false,
            precio: 0          
        };
        

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');
        console.log(copia);
    };

    /*
    function handleClic(e) {
        e.preventDefault();
        setEtiqueta("Cambios");

    }
    */

    function handleCambios(e){
        const value = e.target.value;
        setEtiqueta(value);
    
    };

    function handleActualizar(id, value){
        const copia = [...cuerpo];
        const item = copia.find(item => item.id === id);
        item.etiqueta = value;
        setCuerpo(copia);
    
    };

    function handleEliminar(id){
        //se compara con un valor diferente para que lo oculte, más no para eliminarlo
        const copia = cuerpo.filter(item => item.id !== id);
        setCuerpo(copia);
    };


    return (
        <div className='objContenedor'>
            <form 
            className='objFormulario'
            onSubmit={handleEnviar}
            >
                <input
                    className='objInput'
                    onChange={handleCambios} 
                    value={etiqueta}               
                />
                <input
                    //onClick={handleClic}
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="Crear Objeto"
                            
                />                              
            </form>

            <div className="cuerpoContendor">
                {
                    cuerpo.map(item =>(
                        //<div>{item.id}</div>
                        <Objetos
                        key={item.id}
                        item={item}
                        actualizarDatos ={handleActualizar}
                        onEliminar={handleEliminar}
                        />
                    ))
                }
                
            </div>
        </div>

    );
}