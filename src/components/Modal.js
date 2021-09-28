import React from "react";
import Movie from './movies'


const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=25410d167eb58e717d563b65bc206ff7"

function setGenre() {
    
}

const Modal = ({ showModal, setShowModal, genre_ids }) => {
    return (
        <>                                                                    {/* <> </> react fragment*/}
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
                                        <label>
                                            <input
                                            type="radio"
                                            value={genre_ids}
                                            />
                                        Action
                                    </label>
                                </div>
                                <div className="radio">
                                        <label>
                                            <input
                                            type="radio"
                                            value={genre_ids}
                                            />
                                        Adventure
                                    </label>
                                </div>
                                <div className="radio">
                                        <label>
                                            <input
                                            type="radio"
                                            value={genre_ids}
                                            />
                                        Drama
                                    </label>
                                </div>
                                <div className="radio">
                                        <label>
                                            <input
                                            type="radio"
                                            value={genre_ids}
                                            />
                                        Comedy
                                    </label>
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
};




export default Modal;