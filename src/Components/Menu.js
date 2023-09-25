import "../App.css";
import { useContext } from "react";
import { GameStateContex } from "../Helpers/Contex";
function Menu ()
{
    const {gameState, setGameState, userName, setuserName} = useContext(GameStateContex);
    function checheckUsername(checkName)
    {
            if(checkName===undefined || checkName==="")
            {
                alert("Please enter your Name !!");
            }
            else{
                setGameState("playing");
            }
    }

    return (
<div className="Menu">
    <label>Enter Your Name: </label>
<input type="text" placeholder="Ex. Jhon Doe" onChange={(event)=>{
    setuserName(event.target.value)
}}></input>
<button onClick={()=>{ checheckUsername(userName)}}>Satrt Quizz</button>
</div>

    );
}

export default Menu;