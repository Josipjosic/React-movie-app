import React , {useEffect, useState}from "react";


const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=25410d167eb58e717d563b65bc206ff7";


const Modal = ({ showModal, setShowModal }) => {

    return (
        <>                                                            
            {showModal ? 
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
                                <button>Roll</button>
                            </div>
                        </div>
                    </div>
                </div> :null }
        </>
    );

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
                      genre.map((genres)    =>  (
                      <li key={genres.id}>
                          <input type="radio" value={genres.id} onClick={() => {
                               console.log(genres.id)
                            }}>
                        </input>
                        {genres.name}</li>
                        )
                    )
                  }
              </ul>
          </div>
      )
    
    }

 };




export default Modal;
