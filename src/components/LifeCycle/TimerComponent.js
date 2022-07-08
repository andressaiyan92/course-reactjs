import React from "react";
import ClockComponent from "./ClockComponent";

export default class TimerComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temporary = null;
        console.log(0, "Iniciado pero aun no esta en el DOM");
    }

    tictac(){
        this.temporary = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    start = () => {
        this.tictac();
        this.setState({
            visible: true
        });
    }

    stop = () => {
        clearInterval(this.temporary);
        this.setState({
            visible: false
        });
    }

    componentDidMount(){
        console.log(1, "Se ha montado el componente en el DOM");
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, "Se ha actualizado el componente en el DOM");
        console.log(prevProps);
        console.log(prevState);
    }

    render(){
        console.log(4, "Renderizado");
        return(
            <>
                <h3>Ciclos de vida</h3>
                <p>Ver en consola</p>
                { this.state.visible && <ClockComponent hour={this.state.time} />}
                <button onClick={this.start}>Iniciar</button>
                <button onClick={this.stop}>Detener</button>
            </>
        );
    }
}