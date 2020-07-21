// ALWAYS IMPORT REACT
import React from 'react';
import Welcome from './Welcome';

// ALWAYS NAME OUR FUNCTION WITH A CAPITAL
function Header(props) {
	console.log(props);
	// ALWAYS RETURN ONE JSX ELEMENT OR NULL
	return (
		<header>
			<h1>Reelz: The Movie App</h1>
			<Welcome name={'Angela'} newUser={true} />
			<div>
				<ul>
					<li onClick={props.showAllMovies}>Now Playing</li>
					<li onClick={props.filterMovies}>Must See Movies</li>
				</ul>
			</div>
		</header>
	);
}

// ALWAYS EXPORT FOR USE IN ANOTHER COMPONENT
export default Header;
