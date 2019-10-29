import React from 'react';
import axios from 'axios';

class Homepage extends React.Component {
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

    fetchData = async () => {
        let mergedPokemon = [];
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => res.data);
        const pokemonDetail = await Promise.all(pokemon.results.map(item => {
            let getDetail = axios.get(item.url).then(res => res.data);
            console.log(getDetail);
            mergedPokemon.push({...item, ...getDetail});
            return getDetail;
        }));
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        // console.log(this.state.data.results);
        return (
            <>
                <h1>Pokemon</h1>
                <div>
                    {/*{*/}
                    {/*this.state.data.results.map((pokemon, i) => {*/}
                    {/*return <div key={i}>{pokemon.name}</div>*/}
                    {/*})*/}
                    {/*}*/}
                </div>
            </>
        )
    }

}

export default Homepage;