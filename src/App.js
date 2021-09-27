import React, { useEffect, useState } from 'react';
import Movie from './components/movies.js';
import shuffle from './components/img/Shuffle.png';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=25410d167eb58e717d563b65bc206ff7";  
const SEARCH_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=25410d167eb58e717d563b65bc206ff7&query=";


function App() {

  const [ movies, setMovies ] = useState ([]);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  }

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });

  }, []);


return ( 
  <div className="App">
    <div className="container">
      {movies.slice(0, visible).map((movie) =>
        <Movie key={movie.id}
          {...movie} />
        )};
        <div className="button-container">
          <button className="buttonLoad" onClick={showMoreItems}>Load</button>
          <button className="buttonRoullete" onClick={showMoreItems}> <img src={shuffle} alt="Shuffle" /></button>
        </div>
      </div>
   </div>
  );
};

export default App;
