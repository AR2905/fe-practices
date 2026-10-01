'use client';

import { useState } from 'react';

const Page = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWinner = (newBoard) => {
        for (const [a, b, c] of winningPatterns) {
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                return newBoard[a];
            }
        }

        return null;
    };

    const handleClick = (index) => {
        // Don't allow clicking an already filled box
        if (board[index]) return;

        const newBoard = [...board];

        newBoard[index] = player;

        setBoard(newBoard);

        const winner = checkWinner(newBoard);

        if (winner) {
            alert(`${winner} wins!`);
            return;
        }

        // Change player
        setPlayer(prev => prev === 'X' ? 'O' : 'X');
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setPlayer('X');
    };

    return (
        <div className="flex flex-col items-center gap-5">

            <h1 className="text-3xl font-bold">
                Tic Tac Toe
            </h1>

            <h2>
                Current Player: {player}
            </h2>

            <div className="grid grid-cols-3 bg-red-300">
                {board.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className="w-20 h-20 border text-3xl font-bold"
                    >
                        {value}
                    </button>
                ))}
            </div>

            <button
                onClick={resetGame}
                className="px-5 py-2 border rounded bg-red-200"
            >
                Reset
            </button>

        </div>
    );
};

export default Page;