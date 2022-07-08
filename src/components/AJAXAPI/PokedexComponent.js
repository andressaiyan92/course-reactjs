import React, { Component } from 'react';
import PokemonComponent from './PokemonComponent';

export default class PokedexComponent extends Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        let pokemons = [];
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                json.results.forEach((element) => {
                    fetch(element.url)
                        .then((response) => response.json())
                        .then((json) => {
                            //console.log(json)
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                img: json.sprites.front_default
                            }
                            //console.log(pokemon);
                            pokemons.push(pokemon);
                            //pokemons = [...this.state.pokemons, pokemon];
                            this.setState({ pokemons });
                        });
                });
            });
    }

    render() {
        return (
            <div>
                <h3>POKEDEX PETICIONES AJAX Y API'S</h3>
                {
                    this.state.pokemons.length === 0 ?
                        <p>Cargando...</p>
                        :
                        this.state.pokemons.map(item => <PokemonComponent key={item.id} name={item.name} img={item.img} />)
                }
            </div>
        );
    }
}