import Exp1 from "./exp1"
// import '../App.css'
import Exp3 from "./exp3"
import {useState} from "react"
function App1() {
  const [activePlayer,setActivePlayer]=useState('X')
  function ActivePlayer(){
    setActivePlayer((previousPlayer)=>
      (previousPlayer==='X')?'O':'X'
    )
    
  }
  console.log(activePlayer);
     return (
       <>
       <main>
        <div id="game-container">
          <ol id="players">
          <Exp1 playerName={'Player1'} Symbol={'X'} isactive={activePlayer==='X'}/>
          <Exp1 playerName={'Player2'} Symbol={'O'} isactive={activePlayer==='O'}/>
          
          </ol>
          
          <Exp3 player={ActivePlayer} activePlayer1={activePlayer}/>
        </div>
      
       </main>
       </>
     )
   }
   
   export default App1