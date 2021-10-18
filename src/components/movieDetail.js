import React, {useState, useEffect} from "react";
import axios from "axios";





function MovieDetail() {
    const id = 580489;
    const MOVIE_ID = `https://api.themoviedb.org/3/movie/${id}?&api_key=25410d167eb58e717d563b65bc206ff7&`;
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
      <div className="movieContainerDetail">
        <div className="movieDetail"> 
          <div className="movieBanner">
            <h3>{detail.title} ({detail.release_date}) </h3>
          </div>
          <div className="movieDetailImg">
            <h5> {detail.overview} </h5>
           <img src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`} alt={detail.title}  />   
          </div>
          <div className="movieDetailAbout">
            <h5>
              Rating : {detail.vote_average}
            </h5>
            <h5 className="movieDetailLng">
              Language: {detail.original_language} 
            </h5>
            <h5>
              Popularity: {detail.popularity}
            </h5>
            <h5>
              Production Companies: 
            </h5>
        </div>
      </div>
     </div>
    )
}

export default MovieDetail;