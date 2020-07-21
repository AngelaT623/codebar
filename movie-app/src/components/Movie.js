import React from 'react'

// props = { title: 'star wars', poster: 'http://...' }
function Movie({title, poster}) {
    function clickMe () {
        alert(title);
    }
    return (
    <div className='movie'>
        <h2>{title}</h2>
        <img src={poster} alt='movie poster' />
        <button onClick={clickMe}>Say My Name!</button> 
    </div>
    );
}

export default Movie;