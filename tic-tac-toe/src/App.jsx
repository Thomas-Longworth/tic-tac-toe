import { useState } from 'react'
import CheckWin from './components/CheckWin';
import './App.css'
import Board from './components/Board'
import { createContext } from "react";

export const GameContext = createContext({})


function App() {
    const [gameBoard, setGameBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [playerX, setPlayerX] = useState(true)



    return (
        <>

            <GameContext.Provider value={{ gameBoard, setGameBoard, playerX, setPlayerX }}>
                <div className='container-sm mx-auto '>
                    <div className='row'>
                        <div className='col-4 border'>
                            <CheckWin/>
                           
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
