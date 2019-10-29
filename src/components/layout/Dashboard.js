import React, {Component} from 'react';
import PokemonList from "../../modules/pokemon/PokemonList";

class Dashboard extends Component {
    render() {
        return (
            <>
                <PokemonList></PokemonList>
            </>
        );
    }
}

export default Dashboard;