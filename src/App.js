import React, { useEffect, useState } from "react";
import Movie from "./components/movies.js";
import shuffle from "./components/img/Shuffle.png";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from "./components/movieDetail.js";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?&api_key=25410d167eb58e717d563b65bc206ff7";
const GENRE_API =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=25410d167eb58e717d563b65bc206ff7";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(6);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [rickRolled, setRickRolled] = useState([]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

    useEffect(async () => {
    const fetchData = async () => {
      const response = await axios(FEATURED_API + "&with_genres=" + rickRolled);
      setMovies(response.data.results);
      console.log(response.data.results)
    };
   
    fetchData();
  }, [rickRolled]);

  return (
          <div className="App">
            <div className="container">
              {movies.slice(0, visible).map((movie) => (
                <Movie key={movie.id} {...movie} />
              ))}
              <Modal showModal={showModal} setShowModal={setShowModal} />
              <div className="button-container">
                <button className="buttonLoad" onClick={showMoreItems}>
                  Load
                </button>
                <button className="buttonRoullete" onClick={openModal}>
                  {" "}
                  <img src={shuffle} alt="Shuffle" />
                </button>
              </div>
            </div>
          </div>
  );

  function Modal({ showModal }) {
    return (
      <>
        {showModal ? (
          <div className="modalContainer ">
            <div className="modalMenu">
              <div className="modalTitle">
                <h1>Movie Roulette</h1>
              </div>
              <div className="modalFunctions">
                <h3>Select genre: </h3>
                <div className="modalList">
                  <div className="radio">
                    <div className="genre">
                      <Genres />
                    </div>
                  </div>
                </div>
                <div className="modalButton">
                  <button
                    onClick={() => {
                      setRickRolled(selectedGenre);
                    }}
                  >
                    Roll
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );

    function Genres() {
      const [genre, setGenre] = useState([]);

      useEffect(() => {
        fetch(GENRE_API)
          .then((res) => res.json())
          .then((res) => {
            setGenre(res.genres);
          });
      });

      return (
        <div>
          <ul>
            {genre.map((genres) => (
              <li key={genres.id}>
                <input
                  type="radio"
                  value={genres.id}
                  onClick={() => {
                    setSelectedGenre((prevArray) => [...prevArray, genres.id]);
                    console.log(selectedGenre);
                  }}
                ></input>
                {genres.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
