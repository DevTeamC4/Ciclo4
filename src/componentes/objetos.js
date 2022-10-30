import { useState } from "react"

export default function Objetos({item}){
    //creamos los estado adicionales
    return(
        <div>
            {item.etiqueta}
            <buton>Editar</buton>
            <buton>Eliminar</buton>
        </div>


    )


}