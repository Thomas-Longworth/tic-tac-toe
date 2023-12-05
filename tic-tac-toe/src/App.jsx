import { useState } from 'react'
import CheckWin from './components/CheckWin';
import './App.css'
import Board from './components/Board'
import { createContext } from "react";
import Scores from './components/Scores'
export const GameContext = createContext({})


function App() {
    const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [playerX, setPlayerX] = useState(true)
    const [winner,setWinner]=useState("")
    const [winningPattern, setWinningPattern]=useState()
    const [player1Score,setPlayer1Score]=useState(0)
    const [player2Score,setPlayer2Score]=useState(0)
  




    return (
        <>

            <GameContext.Provider value={{ gameBoard, setGameBoard, playerX, setPlayerX, winner,setWinner, winningPattern, setWinningPattern,player1Score,setPlayer1Score, player2Score,setPlayer2Score}}>
                <div className='container-sm mx-auto '>
                    <div className='row'>
                        <div className='col-4 border'>

                            <CheckWin/>
                            <Scores/>
                           
                            </div>
                        <div className='col-8 border'>
                            <Board/>
                        </div>
                    </div>


                </div>
             
            
            </GameContext.Provider>

        </>
    )
}

export default App
