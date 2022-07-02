import React, {Component} from "react";
import SuccessComponent from "./SuccessComponent";
import FailedComponent from "./FailedComponent";

export default class AccessComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            access: false
        };
    }
    render() {
        return (
            <div>
                {this.state.access ? <SuccessComponent /> : <FailedComponent />}
            </div>
        );
    }
}