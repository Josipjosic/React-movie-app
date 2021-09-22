import React, { useEffect, useState } from 'react';
import Movie from './components/movies.js'


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=25410d167eb58e717d563b65bc206ff7";
const SEARCH_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=25410d167eb58e717d563b65bc206ff7&query=";


function App() {

  const [ movies, setMovies ] = useState ([]);

  useEffect(() => {
    fetch(FEATURED_API).then((res) => res.json()).then((data) => {
      console.log(data);
      setMovies(data.results);
    });

  }, []);


return <div>
  {movies.length > 0 && movies.map((movie) =>
      <Movie key={movie.id}
       {...movie} />
      )}
   </div>;
}

export default App;
