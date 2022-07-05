import React, { Component } from "react";
import data from "../../helpers/data.json";
import ListElementComponent from "./ListElementComponent";

export default class ElementRenderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
        }
    }
    render() {
        return (
            <div>
                <h2>Renderizado de elementos</h2>
                <ol>
                    {this.state.seasons.map((season, index) => {
                        return <li key={index}>{season}</li>
                    }
                    )}
                </ol>
                <h2>Framworks Front-End JS</h2>
                <ul>
                    {data.frameworks.map((framework) => (
                        <ListElementComponent key={framework.id} framework={framework} />
                    ))}
                </ul>
            </div>
        )
    }

}