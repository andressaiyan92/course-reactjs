import React, { Component } from "react";
import CountChildFunctionComponent from './CountChildFunctionComponent';

export default class CountComponent extends Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        // }
        //     , 500);
    }

    render() {
        return (
            <div>
                <h1>Contador:</h1>
                <p>{this.state.count}</p>
                <CountChildFunctionComponent msg={this.state.count * 2} />
            </div>
        );
    }

}