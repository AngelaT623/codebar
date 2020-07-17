import React from 'react'


function Movie({title, poster}) {

    return (
    <div className='movie'>
        <h2>{title}</h2>
        <img 
        src={poster} 
        alt='movie poster' 
        />
    </div>
    )}



export default Movie;