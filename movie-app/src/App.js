import React from 'react';
import logo from './logo.svg'
import './App.css';

import Header from './components/Header';
import Movie from './components/Movie';

const movie = {
	title: 'Star Wars: The Rise of Skywalker',
	poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
	rotten_tomatoes: 53,
	audience_score: 86,
	summary:
		'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
};

function App() {
  return (
  <main>
		<Header /> <Movie title={movie.title} poster={movie.poster} />;
  </main> 
  ); 
}

export default App;
