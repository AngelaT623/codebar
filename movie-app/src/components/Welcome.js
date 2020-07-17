import React from 'react';

function Welcome({ newUser, name }) {
	return (
		<p>
			Welcome {newUser ? 'aboard' : 'back'}, {name}!
		</p>
	);
}
export default Welcome;
