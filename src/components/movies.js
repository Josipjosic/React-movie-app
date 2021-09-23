import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, release_date, vote_average ,original_language}) => (
    <div className="movie"> 
        <span className="movie-vote">{vote_average}</span>
        <img src={IMG_API + poster_path} alt={title} />
        
        
        <div className="movie-info">
            <h3>{title} ({release_date})</h3>
            <h5 className="movie-lang">Language: {original_language} </h5>
        </div>
    </div>
)

export default Movie;