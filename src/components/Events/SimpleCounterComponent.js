import React from "react";

export default class CounterComponent extends React.Component{
    state = {
        count: 0
    }
    increment = (e) => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = (e) =>{
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    render(){
        return(
            <div>
                <h2>Contador Events ES7</h2>
                <nav>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </nav>
                <h3>{this.state.count}</h3>
            </div>
        );
    }

}