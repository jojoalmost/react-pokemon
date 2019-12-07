import React, {Component} from 'react';
import PokemonCard from "./PokemonCard";
import axios from "axios";

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                count: 0,
                next: null,
                previous: null,
                results: [],
            }
        }
    }

    fetchData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                this.setState({
                    data: res.data
                });
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className='row mt-3'>
                {this.state.data.results.map((pokemon, i) => {
                    return <PokemonCard key={i} name={pokemon.name} url={pokemon.url}></PokemonCard>
                })}
            </div>
        );
    }
}

export default PokemonList;