import React, { useState, useRef } from 'react';
import Card from './Card';

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setIsXTurn] = useState(true);
    const counter = useRef(0);

    const checkWinner = () => {
        const winnerConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const win of winnerConditions) {
            const [a, b, c] = win;

            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return `${state[a]} won`;
            }
        }

        if (counter.current === 9) {
            return "Game is tied";
        }

    };


    const isWinner = checkWinner();


    const handleClick = (index) => {
        if (state[index] == null && !isWinner) {
            counter.current++;
            const copyState = [...state];
            copyState[index] = isXturn ? "X" : "O";
            setState(copyState);
            setIsXTurn(!isXturn);

        }
    };


    const handleReset = () => {
        setState(Array(9).fill(null))
        setIsXTurn(true)
        counter.current = 0;
    }

    return (
        <>

            {isWinner ?
                <h1>{isWinner ? <>{isWinner}</> : <>{isWinner}</>}</h1>
                :
                <>
                    <div className='mr-10'>
                        <h1>{isXturn ? "PLAYER X TURN" : "PLAYER O TURN"}</h1>
                        <p className='block'>Tries Counter - {counter.current}</p>
                    </div>
                    <div id='board' style={{ width: '604px', height: '603px', display: 'flex', flexWrap: 'wrap' }}>
                        {state.map((value, index) => (
                            <Card key={index} onClick={() => handleClick(index)} value={value} />
                        ))}
                    </div>
                </>
            }

        </>
    );
}

export default Board;
