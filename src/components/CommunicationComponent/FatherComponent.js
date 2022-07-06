import React from "react";
import ChildComponent from "./ChildComponent";

export default class FatherComponent extends React.Component {
    state = {
        count: 0
    }
    increment = (e) => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = (e) => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {
        return (
            <>
                <h2>Componente padre</h2>
                <p>Contador: {this.state.count}</p>
                {/* Comunicación Padre a hijos */}
                <ChildComponent function={(e) => this.increment(e)} symbol="+" msg="Hijo 1"/>{/* Comunicación hijo a padre a traves de el estado */}
                <ChildComponent function={(e) => this.decrement(e)} symbol="-" msg="Hijo 2"/>{/* Comunicación hijo a padre a traves de el estado */}
            </>
        );
    }
}