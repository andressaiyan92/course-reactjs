import React from "react";
// Se recibe a la funcion como propiedad y se la ejecuta en el metodo on click
export default function CustomComponent({props, myOnClick}) {
    return (
        <button onClick={myOnClick}>Evento personalizado</button>
    )
}

/*
export default function CustomComponent(props) {
    return (
        <button onClick={props.myOnClick}>Evento personalizado</button>
    )
}
*/