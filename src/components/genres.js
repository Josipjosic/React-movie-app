import React, {useEffect, useState} from "react";

const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=25410d167eb58e717d563b65bc206ff7";

function Genres () {

    const [genre, setGenre ] = useState ([]);

    useEffect(() => {
        fetch(GENRE_API)
        .then((res) => res.json())
        .then((res) => {
          setGenre(res.genres)
        });
    
      });

      return(
          <div>
              <ul>
                  {
                      genre.map((genres)=>(<li key={genres.id}>{genres.name}</li>))
                  }
              </ul>
          </div>
      )
    
    }
export default Genres;