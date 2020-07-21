import React from 'react';

import Movie from './Movie';

// props = {
//  movies: [{ movieobj1 }, { movieobj2 }]
//  Title: 'Now Playing',
// }

class Movies extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           hideMovies: false, 
        };
    }
    toggleMovies = () => {
        this.setState({ hideMovies: !this.state.hideMovies })
};
    render() {
	return (
		<section>
			{!this.state.hideMovies && <h2>{this.props.title}</h2>}
            <button onClick={this.toggleMovies}>Toggle Movies</button>
            {!this.state.hideMovies &&
                this.props.movies.map((movie) => (
				    <Movie key={movie.id} title={movie.title} poster={movie.poster} />
			))}
		</section>
        );
    }
}

export default Movies;
