import React, { useRef, useState } from 'react';

const StopWatch = () => {
  const [timer, setTimer] = useState({ hours: "0", minutes: "0", seconds: "0" });
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      ref.current = setInterval(() => {

        const newSeconds = timer.seconds === 59 ? 0 : timer.seconds + 1;
        const newMinutes = newSeconds === 0 && timer.minutes !== 59 ? timer.minutes + 1 : timer.minutes;
        const newHours = newMinutes === 0 && timer.hours !== 23 ? timer.hours + 1 : timer.hours;

        setTimer({
          hours: formatTime(newHours),
          minutes: formatTime(newMinutes),
          seconds: formatTime(newSeconds),
        });
      }, 1000); 
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(ref.current);
      ref.current = null; 
    }
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(ref.current);
    ref.current = null;
    setTimer({ hours: "0", minutes: "0", seconds: "0" });
  };

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <>
      <h1 className='font-sans text-3xl font-bold' >STOPWATCH</h1>

      <div className='w-[300px] h-[150px] bg-white rounded-xl ml-3 flex flex-col justify-center items-center gap-8' >

        <div className='flex text-5xl font-sans font-extrabold gap-5' >
          <p>{timer.hours}</p>
          <p>{timer.minutes}</p>
          <p>{timer.seconds}</p>
        </div>

        <div className='flex gap-4 font-sans font-semibold'>
          <button onClick={start} className='py-2 px-6 bg-green-600 text-white rounded-lg' disabled={isRunning}>Start</button>
          <button onClick={stop} className='py-2 px-6 bg-red-600 text-white rounded-lg' disabled={!isRunning}>Stop</button>
          <button onClick={reset} className='py-2 px-6 bg-black text-white rounded-lg'>Reset</button>
        </div>


      </div>
    </>
  );
};

export default StopWatch;
