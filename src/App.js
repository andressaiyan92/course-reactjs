import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleClassComponent from './components/TitleClassComponent';
import TitleFunctComponent from './components/TitleFunctComponent';
import TitleFunctArrowComponent from './components/TitleFunctArrowComponent';
import ViewPropsComponent from './components/properties/ViewPropsComponent';
import ParaphraseComponent from './components/ParaphraseComponent';
import CountComponent from './components/states/CountComponent';
import AccessComponent from './components/conditionalRender/AccessComponent';
import ElementRenderComponent from './components/collectionRender/ElementRenderComponent';
import CounterComponent from './components/Events/CounterComponent';
import SimpleCounterComponent from './components/Events/SimpleCounterComponent';
import ButtonComponent from './components/Events/Native_Sintetic_Customs/ButtonComponent';
import FatherComponent from './components/CommunicationComponent/FatherComponent';
import TimerComponent from './components/LifeCycle/TimerComponent';
import PokedexComponent from './components/AJAXAPI/PokedexComponent';

function App() {
  return (
    <div className="App">
      {/* Reemplazar class por className */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PokedexComponent />
        <TimerComponent />
        <FatherComponent />
        <ButtonComponent />
        <SimpleCounterComponent />
        <CounterComponent />
        <ElementRenderComponent/>
        <AccessComponent/>
        <CountComponent />
        <ViewPropsComponent msg="Uso de propiedades"
          string="Mi cadena" number={13} boolean={true}
          array={["Hola", "Mundo", "!"]}
          object={{ "name": "Andres", "email": "andres.sevillano.net@gmail.com" }}
          element={<i>Elemento de React JS</i>}
          funct={(num) => num ** 2}
          componentReact={<ParaphraseComponent msg="Componente de parafraseo" />}
        />
        <TitleClassComponent msg="Componente de clase" />
        <TitleFunctComponent msg="Componente de funci??n" />
        <TitleFunctArrowComponent msg="Componente de funci??n con flecha" />
        
      </header>
    </div>
  );
}

export default App;
