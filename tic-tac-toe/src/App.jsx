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

            <GameContext.Provider value={{ gameBoard, setGameBoard ,playerX, setPlayerX}}>

                <CheckWin />
                <div className='container-fluid'><Board /></div>
            </GameContext.Provider>

        </>
    )
}

export default App
