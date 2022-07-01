import React from "react";
import PropTypes from "prop-types";

export default function ViewPropsComponent(props) {
    return (
        <div>
            <div>
                <h4>Título: {props.msg}</h4>
            </div>
            <div>
                <ul>
                    <li>String: {props.string}</li>
                    <li>Number: {props.number}</li>
                    <li>Boolean: {props.boolean ? "Verdadero" : "False"}</li>
                    <li>Array: {props.array[0]}</li>
                    <li>Array: {props.array[1]}</li>
                    <li>Array: {props.array[2]}</li>
                    <li>Array: {props.array.join(" ")}</li>
                    <li>Nombre: {props.object.name}</li>
                    <li>Correo: {props.object.email}</li>
                    <li>{props.element}</li>
                    <li>{props.funct(props.number)}</li>
                    <li>{props.componentReact}</li>
                </ul>
            </div>

        </div>
    );
}

ViewPropsComponent.defaultProps = {
    msg: "Título por defecto",
    object:{
        name: "Default",
        email: "Default"
    }
}

ViewPropsComponent.propTypes = {
    number: PropTypes.number.isRequired,
    string: PropTypes.string.isRequired,
    boolean: PropTypes.bool.isRequired,
    array: PropTypes.array.isRequired,
    object: PropTypes.object.isRequired,
    element: PropTypes.element.isRequired,
    funct: PropTypes.func.isRequired,
    componentReact: PropTypes.element.isRequired
}


