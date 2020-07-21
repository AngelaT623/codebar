import React from 'react';
import './App.css';

import Header from './components/Header';
import Movies from './components/Movies';

import { movies } from './data';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		movies: movies,
		title: 'Now Playing',
		};
	}
	filterMovies = () => {
		const filteredMovies = this.state.movies.filter(
			(movie) => movie.audience_score >= 60
		);
		this.setState({
			movies: filteredMovies, 
			title: 'Must See Movies', 
		});
	
	};

	showAllMovies = () => {
		this.setState({
			movies: movies, 
			title: 'Now Playing',
		});
	};

	render() {
		return (
			<div>
				<Header filterMovies={this.filterMovies} showAllMovies={this.showAllMovies} />
				<Movies movies={this.state.movies} title={this.state.title} />
			</div>
		);
	}
}

export default App;
