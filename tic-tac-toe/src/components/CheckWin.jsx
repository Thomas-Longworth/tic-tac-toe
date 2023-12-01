import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { GameContext } from '../App'
const CheckWin = () => {
    const {gameBoard, setGameBoard} = useContext(GameContext)
    const [winner,setWinner]=useState("")
    const handleReset = () => {
		console.log("reset game")
		setWinner("")
		setGameBoard(["", "","","","","","","",""])
	}
    const patterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]  
    ]
    const CheckWin = ()=> {
      
        for (let i = 0; i < patterns.length; i++) {
            const [a, b, c] = patterns[i];
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                console.log(gameBoard[a]+ "won")
				setWinner(gameBoard[a])
              return gameBoard[a];
            }
          }
          if(gameBoard.includes("")){
            console.log("keeps playing")
        }else {
            setWinner("draw")
        }
        return null;
    }
    useEffect(() => {
        console.log("use e ran")
        CheckWin()
       
      },[gameBoard]);

  return (
    <>
    
     {winner}
	
	 <button onClick={handleReset}>Reset game</button>
  
    </>
   
  )
}

export default CheckWin

//   {gameBoard.map((each, index)=> (
    
//<h2 key={index}>{each}</h2>
//)
//)}