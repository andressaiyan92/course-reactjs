import React from "react";

export default function ChildComponent(props){
    return (
        <>
            <h2>Componente hijo</h2>
            <p>Mensaje del padre: {props.msg}</p>
            {/* Recibir la funcion desde el padre como propiedad para modificar el estado del padre */}
            <button onClick={props.function}>{props.symbol}</button>
        </>
    );
}