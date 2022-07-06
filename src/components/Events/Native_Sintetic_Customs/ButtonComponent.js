import React from "react";
import CustomComponent from "./CustomComponent";

export default class ButtonComponent extends React.Component{

    handleClick = (e, msg) => {
        console.log(e); // Evento sintetico de React
        console.log(e.nativeEvent); // Evento nativo de JS
        console.log(e.target); // Elemento que dispara el evento sintetico
        console.log(e.nativeEvent.target); // Elemento que dispara el evento nativo
        console.log(msg); // Parametro pasado al evento
    }

    render(){
        return(
            <div>
                <h1>Eventos Sinteticos Nativos y Personalizados</h1>
                {/* <button onClick={this.handleClick}>Mostrar Eventos</button> */}
                {/* Pasar parametro a evento */}
                {/* Se lo realiza a modo de arrow function pasando como parametro el evento y en la funcion los argumentos
                    e mas los parametros. */}
                <button onClick={(e) => this.handleClick(e, "Pasar parametro")}>Mostrar Eventos</button>
                {/* Evento personalizado */}
                {/* Se debe pasar como property a la función con un nombre personalizado*/}
                <CustomComponent myOnClick={(e) => this.handleClick(e, "Pasar parametro")}/>

            </div>
        )
    }
}