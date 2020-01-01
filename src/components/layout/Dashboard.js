import React, {Component} from 'react';
import PokemonList from "../../modules/pokemon/PokemonList";

class Dashboard extends Component {
    render() {
        return (
            <>
                <PokemonList/>
            </>
        );
    }
}

export default Dashboard;