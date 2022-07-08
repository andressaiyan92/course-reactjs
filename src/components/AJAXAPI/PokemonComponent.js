import React from "react";

export default function PokedexComponent(props){
    return(
        <figure>
            <img src={props.img} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}