import React, { useState } from 'react';

function Array() {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const handleDelete = () => {

        setVal([...val, val[val.length - 1] + 1])
    };

    return (
        <>
            <div className='p-10'>
                {val.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))}
                <button
                    onClick={handleDelete}
                    className='px-2 py-1 text-white font-bolder bg-zinc-600 rounded-lg'>
                    Add
                </button>
            </div>
        </>
    );
}

export default Array;

