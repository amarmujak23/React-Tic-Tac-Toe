import React, { useState, useEffect } from 'react';
import './TicTacToe.css';


const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
  const [isDraw, setIsDraw] = useState(false);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinner = (squares) => {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const checkDraw = () => {
    return cells.every((cell) => cell !== '');
  };

  const handlePlayerMove = (num) => {
    if (cells[num] !== '' || winner) {
      return;
    }

    const squares = [...cells];
    squares[num] = 'x';
    setCells(squares);
    setTurn('o');

    const winnerResult = checkForWinner(squares);
    if (winnerResult) {
      setWinner(winnerResult);
      return;
    }

    if (checkDraw()) {
      setIsDraw(true);
      return;
    }
  };

  const handleComputerMove = () => {
    if (winner) {
      return;
    }

    const squares = [...cells];
    let emptyCells = [];

    squares.forEach((cell, index) => {
      if (cell === '') {
        emptyCells.push(index);
      }
    });

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const computerChoice = emptyCells[randomIndex];
    squares[computerChoice] = 'o';

    setCells(squares);
    setTurn('x');

    const winnerResult = checkForWinner(squares);
    if (winnerResult) {
      setWinner(winnerResult);
      return;
    }

    if (checkDraw()) {
      setIsDraw(true);
      return;
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(''));
    setTurn('x');
    setIsDraw(false);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handlePlayerMove(num)}>{cells[num]}</td>;
  };

  useEffect(() => {
    if (turn === 'o') {
      handleComputerMove();
    }
  }, [turn, winner]);

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <div>
          <p>{winner === 'x' ? 'You win!' : 'Computer wins!'}</p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
      {isDraw && !winner && (
        <div>
          <p>It's a draw!</p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
