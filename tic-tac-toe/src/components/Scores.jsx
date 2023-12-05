import React, {useContext} from 'react'
import { GameContext } from '../App'

const Scores = () => {
  const {player1Score,setPlayer1Score}=useContext(GameContext)
    const {player2Score,setPlayer2Score}=useContext(GameContext)
  
  return (
    <>

    <div className='container border'>
        <div className='row'><h2>Scores:</h2></div>
        <div className='row'><h4>Player 1: {player1Score}</h4></div>
        <div className='row'><h4>Player 2: {player2Score}</h4></div>


    </div>
    
    </>
  )
}

export default Scores