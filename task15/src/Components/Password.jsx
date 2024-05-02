import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";

function Password() {

    const [isHidden, setIsHidden] = useState(true);
    const handleVisibility = () => {
        setIsHidden(!isHidden)
    }

    return (
        <>
            <div className='flex flex-col'>
                <h1 className='font-sans text-3xl font-bold mb-5'>Password Visibility Toggle</h1>
                <input className='p-3 font-sans  rounded-md' type={isHidden ? "password" : "text"} placeholder='Enter password' />
                <button onClick={handleVisibility} className={` hover:bg-red-400 mt-3 py-2 px-6 ${isHidden ? " bg-green-500" : "bg-red-600 hover:bg-green-500"} text-white font-sans font-bold uppercase rounded-lg`} >{isHidden ? "Show" : "Hide"}</button>
            </div>
        </>
    )
}

export default Password
