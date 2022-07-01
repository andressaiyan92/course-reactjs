import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleClassComponent from './components/TitleClassComponent';
import TitleFunctComponent from './components/TitleFunctComponent';
import TitleFunctArrowComponent from './components/TitleFunctArrowComponent';
import ViewPropsComponent from './components/properties/ViewPropsComponent';

function App() {
  return (
    <div className="App">
      {/* Reemplazar class por className */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ViewPropsComponent msg="Uso de propiedades"
          string="Mi cadena" number={13} boolean={true}
          array={["Hola", "Mundo", "!"]}
          object={{ "name": "Andres", "email": "andres.sevillano.net@gmail.com" }}
          element={<i>Elemento de React JS</i>}
          funct={(num) => num ** 2}
          componentReact={<TitleClassComponent msg="Hola Mundo" />}
        />
        <TitleClassComponent msg="Componente de clase" />
        <TitleFunctComponent msg="Componente de función" />
        <TitleFunctArrowComponent msg="Componente de función con flecha" />
      </header>
    </div>
  );
}

export default App;
