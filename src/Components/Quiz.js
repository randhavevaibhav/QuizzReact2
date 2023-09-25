import React from 'react';
import '../App.css';
import Questions from '../Helpers/Questions';
import { useState } from 'react';
import { useContext } from "react";
import { GameStateContex } from "../Helpers/Contex";
function Quiz(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const {score,setScore,gameState,setGameState} = useContext(GameStateContex);

    const choseOption = (option) =>
    {
            setOptionChosen(option);
    }
    const nextQuestion = () =>
    {
        if(Questions[currentQuestion].answser===optionChosen)
        {
           
            setScore(score+1);
        }
       
        setCurrentQuestion(currentQuestion+1);
    }

    const finishQuiz = ()=>
    {
        if(Questions[currentQuestion].answser===optionChosen)
        {
           
            setScore(score+1);
        }
        setGameState("finished")
    }
    return (
        <div className='Quiz'>
           
            <h2>{Questions[currentQuestion].question}</h2>
            <div className='options'>
                <button onClick={()=>{choseOption('optionA')}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={()=>{choseOption('optionB')}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={()=>{choseOption('optionC')}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={()=>{choseOption('optionD')}}>{Questions[currentQuestion].optionD}</button>

            </div>
           {currentQuestion === Questions.length-1 ? <button id= "finishedQuestion"onClick={finishQuiz}>Finish Quiz</button>:
           <button id= "finishedQuestion" onClick={nextQuestion}>Next Question</button> }

            
        </div>
       
    );
}

export default Quiz;