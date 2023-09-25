import "../App.css";
import { useContext } from "react";
import { GameStateContex } from "../Helpers/Contex";
function Menu ()
{
    const {gameState, setGameState, userName, setuserName} = useContext(GameStateContex);

    return (
<div className="Menu">
    <label>Enter Your Name: </label>
<input type="text" placeholder="Ex. Jhon Doe" onChange={(event)=>{
    setuserName(event.target.value)
}}></input>
<button onClick={()=>{setGameState("playing")}}>Satrt Quizz</button>
</div>

    );
}

export default Menu;