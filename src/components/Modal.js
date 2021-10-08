import React , {useEffect, useState}from "react";
import { generatePath } from "react-router";
import App from '../App'
import Genres from './genres'


const Modal = ({ showModal, setShowModal }) => {

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
 };




export default Modal;
