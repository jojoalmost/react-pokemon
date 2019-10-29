import React, {Component} from 'react';
import axios from "axios";

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            detail: []
        }
    }

    fetchData = (url) => {
        axios.get(url).then((res) => {
            this.setState({
                detail: res.data,
                loading: false,
            })
        })
    }

    componentDidMount() {
        const {name, url} = this.props;
        this.fetchData(url);
        this.setState({
            name,
        })
    }

    render() {
        return (
            <div className='col-3 mb-3'>
                <div className='card'>
                    <div className='card-header text-center'>
                        <h5 className='text-capitalize'>{this.state.name}</h5>
                    </div>
                    <div className='card-body'>
                        {!this.state.loading ? (
                            <img src={this.state.detail.sprites.front_default} alt={this.state.detail.name}
                                 className='card-img'/>
                        ) : (
                            <span>loading</span>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonCard;