import React, { useState } from 'react'
import { IoReloadSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Counter() {

    const [result, setResult] = useState(0);

    return (
        <>
            {/* Main div */}
            <div className='w-full h-screen bg-gradient-to-r from-violet-200 to-pink-200 flex flex-col justify-center items-center'>

                <h1 className='mb-4 font-sans text-3xl font-bold' >COUNTER APP</h1>

                {/* Counter section */}
                <div className='w-[300px]  bg-slate-50 rounded-lg p-10' >

                    {/* Reset icon */}
                    <span onClick={() => {window.location.reload()}} className='cursor-pointer font-bold'>
                        <IoReloadSharp />
                    </span>

                    {/* Result section */}
                    <div className='w-full h-[250px] bg-gradient-to-r from-yellow-200 to-lime-300 mt-5 flex justify-center items-center rounded-lg'>
                        <h2 className='text-[150px] font-bold font-sans' >{result}</h2>
                    </div>

                    {/* Add and Decrement section */}

                    <div className='mt-6 flex justify-between'>

                        {/* Add */}
                        <span onClick={() => {setResult(result+1)}} className='bg-zinc-200 h-[80px] w-[45%] flex justify-center items-center text-2xl rounded-lg cursor-pointer'>
                            <FaPlus/>
                        </span>

                        {/* Subtract */}
                        <span onClick={() => {setResult(result-1)}} className='bg-zinc-200 h-[80px] w-[45%] flex justify-center items-center text-2xl rounded-lg cursor-pointer'>
                            <FaMinus/>
                        </span>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Counter
