import React, { useState } from 'react';

function Select() {
    const [select, setSelect] = useState({ select1: false, select2: false });

    const handleToggle = (item) => {
        setSelect(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };

    return (
        <div className='w-full h-screen flex justify-center flex-col items-center'>
            <p onClick={() => handleToggle('select1')} className={`w-[300px] px-3 py-2 ${select.select1 ? "bg-black text-white" : "bg-white text-black"} border-2 cursor-pointer`}>Select 1</p>

            <p onClick={() => handleToggle('select2')} className={`w-[300px] px-3 py-2 ${select.select2 ? "bg-black text-white" : "bg-white text-black"} border-2 cursor-pointer mt-5`}>Select 2</p>
        </div>
    );
}

export default Select;
