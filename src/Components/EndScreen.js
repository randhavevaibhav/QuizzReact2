import React from 'react';
import { useContext } from "react";
import { GameStateContex } from "../Helpers/Contex";
import Questions from '../Helpers/Questions';



function EndScreen(props) {
    const {score,setScore,gameState,setGameState,userName} = useContext(GameStateContex);
    const restartGame = ()=>
    {
        setScore(0);
        setGameState("menu");
    }
    return (
        <div className='Endscreen'>
            <h2>Quiz finished</h2>
            <h3>{userName}</h3>
            <h2>Your Score: {score} / {Questions.length}</h2>

            <button onClick={ restartGame}>Restart Game</button>
        </div>
    );
}

export default EndScreen;