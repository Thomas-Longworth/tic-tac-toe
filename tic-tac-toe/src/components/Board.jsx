import React from 'react'
import { useState, useContext } from 'react'
import { GameContext } from '../App'

const Board = () => {



	const { gameBoard, setGameBoard } = useContext(GameContext)
	const { playerX, setPlayerX } = useContext(GameContext)
	const { winner} = useContext(GameContext)


	const handleClick = (index) => {

		let newBoard
		if (playerX) {
			newBoard = gameBoard.map((digit, i) => {
				return i === index ? "X" : digit;
			})
		}
		else {
			newBoard = gameBoard.map((digit, i) => {
				return i === index ? "O" : digit;
			})

		}

		setGameBoard(newBoard)
		setPlayerX(!playerX)
	}

	return (



		<>
		<div className='container-sm mx-auto '>
			
			<div className='row'>
				<h1>Player {playerX ? "1" : "2"}</h1>

			</div>
		
	 <div className='row justify-content-center bg-warning'>
			{gameBoard.map((digit, index) => (
				<div className='col-4  text-center boxes bg-warning' key={index}>

					<button className="game-buttons bg-warning" disabled={gameBoard[index] === "X" || gameBoard[index] === "O"|| winner !==""} onClick={() => handleClick(index)}>{digit}</button>
				</div>
			))}
		</div>






</div>
			
		</>
	)
}

export default Board