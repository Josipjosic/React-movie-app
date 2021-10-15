import React, {useState, useEffect} from "react";
import axios from "axios";





function MovieDetail() {
    const id = 580489;
    const MOVIE_ID = `https://api.themoviedb.org/3/movie/580489?&api_key=25410d167eb58e717d563b65bc206ff7&`;
    const [detail, setDetail] = useState([]);

    useEffect(async () => {
        const fetchId = async () => {
          const response = await axios( MOVIE_ID );
          console.log(response.data);
          setDetail(response.data);
        };
       
        fetchId();
      }, []);

    return(
        <div className="movie"> 
        <div className="movie-vote">
            <span >{detail.vote_average}</span>
        </div>
        <img src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title} />   
        <div className="movie-info">
            <h3>{detail.title} ({detail.release_date}) </h3>
            <h5 className="movie-lang">Language: {detail.original_language} </h5>
        </div>
     </div>
    )
}

export default MovieDetail;