import React from "react";

export default function ElementRenderComponent(props) {
    return (
            <li>
                <a href={props.framework.website} target="_blank" rel="noopener noreferrer">
                    {props.framework.name}
                </a>
            </li>
    )
}