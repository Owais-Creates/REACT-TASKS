import React, { useState } from 'react';

function RandomNumber() {
  const [startNumber, setStartNumber] = useState(0);
  const [endNumber, setEndNumber] = useState(0);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null); 

  const generate = () => {
    const start = parseInt(startNumber, 10); 
    const end = parseInt(endNumber, 10);

    
    if (isNaN(start) || isNaN(end) || start > end || start < 0 || end < 0) {
      setError("Invalid input: Please enter valid positive integers, with the starting number less than or equal to the ending number.");
      return; 
    }

    const randomNumber = Math.floor(Math.random() * (Math.ceil(end) - Math.floor(start) + 1)) + Math.floor(start);
    setResult(randomNumber);
    setError(""); 
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="uppercase text-3xl font-sans font-bold">
          Generate random number based on the user input
        </h1>
        <div>
          <input
            onInput={(e) => setStartNumber(e.target.value)}
            value={startNumber}
            className="block py-3 px-4 w-[50%] my-3 font-sans"
            id="start-number"
            placeholder="Starting Number"
            type="number"
          />
          <p className="text-red-700 font-bold font-sans -mt-2 mb-10">{error}</p>

          <input
            onInput={(e) => setEndNumber(e.target.value)}
            value={endNumber}
            className="block py-3 px-4 w-[50%] my-3 font-sans"
            id="end-number"
            placeholder="Ending Number"
            type="number"
          />
          <p className="text-red-700 font-bold font-sans -mt-2 mb-5">{error}</p>
        </div>

        <button onClick={generate} id="generate" className="py-3 px-8 bg-zinc-800 text-white font-sans font-bold uppercase rounded-2xl w-[200px]">
          Generate
        </button>

        <h2 className="mt-5 text-[25px] font-sans">
          {result !== null
            ? `The result is (${result})`
            : "Click 'Generate' to get a random number"}
        </h2>
      </div>
    </>
  );
}

export default RandomNumber;
