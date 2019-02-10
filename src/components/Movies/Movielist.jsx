import React, { Component } from 'react';
import Card from './Card';

class Movielist extends Component {
    constructor() {
        super();
    }
    movieOnClick = (data) => {
        console.log(data);
    }
    render() {
        const { movielist, category, data } = this.props;
        return( 
            <div className="movies-container">
                <h2>{category}</h2>
                <Card mdata={movielist} data={data} mclick={this.movieOnClick}></Card>
            </div>
        ); 
    }
}
export default Movielist;