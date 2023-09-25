
import './App.css';
import Menu from './Components/Menu';
import {useState} from 'react'; 
import {GameStateContex} from './Helpers/Contex'
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
function App() {
  const [gameState, setGameState] =  useState("menu");
  const [userName, setuserName] =  useState("");
  const [score, setScore] =  useState(0);
  return (
    <div className="App">
      <h1>Quizz App</h1>
      <GameStateContex.Provider value={{gameState,setGameState,userName, setuserName,score,setScore}}>
      {gameState==="menu" &&<Menu/>}
      {gameState==="playing" &&<Quiz/>}
      {gameState==="finished" &&<EndScreen/>}
     
       </GameStateContex.Provider>
      
      
    </div>
  );
}

export default App;
