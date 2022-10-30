import { useState } from "react";
import Objetos from "./objetos";

export default function ObjetosApp() {
    //usestate es un hook para generar eventos
    //etiqueta =Getter ; setetiqueta = Setter
    const [etiqueta, setEtiqueta] = useState('ingreso');
    const [cuerpo, setCuerpo] =useState([]);

    function handleEnviar(evento) {
        evento.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta
        };
        

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');

    }
    /*
    function handleClic(evento) {
        evento.preventDefault();
        setEtiqueta("Cambios");

    }
    */

    function handleCambios(evento){
        const value = evento.target.value;
        setEtiqueta (value);

    }


    return (
        <div className='objContenedor'>
            <form 
            className='objFormulario'
            onSubmit={handleEnviar}
            >
                <input
                    className='objInput'
                    onChange={handleCambios}

                />

                <input
                    onClick={handleEnviar}
                    lassName='objBoton'
                    type="submit"
                    value="Insertar"
                />

                {/*
                {etiqueta}
                 */}

            </form>

            <div className="cuerpoContendor">
                {
                    cuerpo.map(item =>(
                        //<div>{item.id}</div>
                        <Objetos
                        key={item.id}
                        item={item}
                        />
                    ))

                }
                
            </div>
        </div>

    )
}