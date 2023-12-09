import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { GameContext } from '../App'
const CheckWin = () => {
    const {gameBoard, setGameBoard} = useContext(GameContext)
    const {winner,setWinner}=useContext(GameContext)
	const {winningPattern,setWinningPattern}=useContext(GameContext)
	const {player1Score,setPlayer1Score}=useContext(GameContext)
    const {player2Score,setPlayer2Score}=useContext(GameContext)
    const { playerX, setPlayerX } = useContext(GameContext)
  

    const handleReset = () => {
		console.log("reset game")
		setWinner("")
		setGameBoard(["", "","","","","","","",""])
        setPlayerX(true)
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
                if(gameBoard[a]==="X"){
                    setPlayer1Score(prev=>prev+1)
                }else {
                    setPlayer2Score(prev=>prev+1)
                }
				setWinner(gameBoard[a])
				setWinningPattern(patterns[i])
				
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
		console.log(winningPattern)
        CheckWin()
       
      },[gameBoard]);

  return (
    <>

    
  
	
	 <button className='btn btn-primary' onClick={handleReset}>Start game</button>

  
    </>
   
  )
}

export default CheckWin

