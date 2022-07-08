import React from "react";

export default class ClockComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentWillUnmount(){
        console.log(3, "Se va a desmontar del DOM");
    }

    render(){
        return(
            <h2>{this.props.hour}</h2>
        );
    }
}