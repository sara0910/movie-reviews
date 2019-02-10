import React from 'react';
import Movielist from './Movielist';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toprated : [],
            Popular : [],
            Upcoming : []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c3579da55180fefba457763450270a89&language=en-US&page=1")
        .then((res) => res.json())
        .then((res) => {
            const { results } = res;
            this.setState({ toprated : results});
        })
        .catch((err) => console.log(err));
    }

    render() {
        const { toprated } = this.state;
        return(
            <div>
                <Movielist category="Top Rated" movielist={toprated} data={this.props.data}/>
                <Movielist category="Upcoming" movielist={toprated} />
                <Movielist category="Popular" movielist={toprated} />
            </div>
        );
    }
}
export default Movies;