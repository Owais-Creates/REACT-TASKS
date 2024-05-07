import React, { useContext } from 'react';
import { CounterContext } from "../context/Counter";

const ContextPRC = () => {
    const counter = useContext(CounterContext);
    const { count, setCount } = counter;

    return (
        <>
            <button onClick={() => setCount(count + 1)} className='bottin p-10 text-2xl font-bold bg-zinc-300 border-r-black'>+</button>
            <button onClick={() => setCount(count - 1)} className='p-10 text-2xl font-bold bg-zinc-300 mr-2'>-</button>
        </>
    );
};

export default ContextPRC;
