import React, { Component } from "react";

class TitleClassComponent extends Component {
    render() {
        return <h2>Título: {this.props.msg}</h2>
    }
}

export default TitleClassComponent;