import { useState } from "react";

export default function ObjetosApp(){
    //usestate es un hook para generar eventos
    //etiqueta =Getter ; setetiqueta = Setter
    const [etiqueta, setEtiqueta] = useState ('ingreso');

    return(
        <div className='objContenedor'>
            <form className='objFormulario'>  
            <input className= 'objInput'/>
            <input 
            lassName= 'objBotom'
            type = "submit"
            value="Insertar"
            />
            {etiqueta}

            </form>
        </div>



    )
}