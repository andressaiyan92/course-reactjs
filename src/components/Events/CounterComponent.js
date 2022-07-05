import React from "react";

export default class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        // 2. bind functions
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    //1. Define events
    increment(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement(e){
        this.setState({
            count: this.state.count - 1
        });
    }

    render(){
        return(
            <div>
                <h2>Contador Events ES6</h2>
                <nav>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </nav>
                <h3>{this.state.count}</h3>
            </div>
        );
    }

}