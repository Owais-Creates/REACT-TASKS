
import React, { useState } from 'react'

function StopWatch() {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false);
    let intervalId;

    const startStopWatch = () => {
        setIsDisabled(true);  // Disable the button to prevent multiple clicks in a short span of time.
        intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);

        }, 1000)
    }

    const stopWatch = () => {
        window.location.reload()
    }

    if (seconds === 60) {
        setMinutes(prevMinutes => prevMinutes + 1);
        setSeconds(0);

    } else if (minutes === 60) {
        setHours(prevHours => prevHours + 1);
        setMinutes(0)
    }

    return (

        <>
            <div className='w-full h-screen flex flex-col justify-center items-center'>

                <h1 className='text-5xl font-sans font-bold' > StopWatch</h1>
                <div className='w-[300px] h-[100px] flex justify-center items-center text-5xl font-sans font-bold gap-2' >

                    <p>{hours}: </p>
                    <p>{minutes}: </p>
                    <p>{seconds}</p>

                </div>

                <div className='mt-4'>
                    <button onClick={startStopWatch} disabled={isDisabled} className={`py-2 px-6 font-sans uppercase ${isDisabled ? 'bg-green-200 text-black' : 'bg-green-500  text-white '} font-bold rounded-lg mr-5 `} >Start</button>
                    <button onClick={stopWatch} className='py-2 px-6 bg-red-500 font-sans text-white uppercase font-bold rounded-lg ' >Reset</button>      </div>

            </div>
        </>
    )
}

export default StopWatch
