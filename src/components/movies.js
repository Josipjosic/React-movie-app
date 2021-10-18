import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from './movieDetail';


const IMG_API =
 "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, release_date, vote_average ,original_language, id}) => (
    <div className="movie"> 
    <Router>
    <Link to="/components/movieDetail"  style={{ textDecoration: 'none' }}> 
        <div className="movie-vote">
            <span >{vote_average}</span>
        </div>
        <img src={IMG_API + poster_path} alt={title} />   
        <div className="movie-info">
            <h3>{title} ({release_date}) </h3>
            <h5 className="movie-lang">Language: {original_language} </h5>
        </div>
    </Link>
    </Router>
    
    </div>
)

export default Movie;
