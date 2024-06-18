import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redo , setRedo] = useState([])

  const handleClick = (key) => {
    const val = parseInt(key);
    handleHistory(key, value, (value + val))
    setValue(prevVal => prevVal + val)
  }

  const handleHistory = (key, prev, curr) => {
    const obj = {
      action: key,
      prevVal: prev,
      curVal: curr
    }

    const historyCopy = [...history];
    historyCopy.unshift(obj);
    setHistory(historyCopy);
  }

  const handleUndo = () => {
    if (history.length > 0) {
      const copyHistory = [...history];
      const lastAction = copyHistory.shift();
      setHistory(copyHistory);

      setValue(lastAction.prevVal)

      const copyRedo = [...redo];
      copyRedo.push(lastAction);
      setRedo(copyRedo)
    }
  }

  return (


    <>
      <div className='w-full h-screen flex justify-center items-center flex-col' >
        <h1 className='text-4xl font-bold ' >Undo Counter</h1>

        <div>
          <button
          onClick={handleUndo}
          className='bg-red-500 p-5 mr-4 rounded-lg mt-5'>Undo</button>
          <button className='bg-green-500 p-5 rounded-lg'>Redo</button>
        </div>

        <div className='flex gap-10 mt-5' >
          <div>
            {["-100", "-10", "-1"].map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item)}
                className='text-2xl p-3 bg-zinc-300 rounded-xl ml-3 mt-3' >{item}</button>
            ))}
          </div>

          <h2 className='text-5xl font-extrabold mt-3' >{value}</h2>

          <div>
            <div>
              {["+100", "+10", "+1"].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(item)}
                  className='text-2xl p-3 bg-zinc-300 rounded-xl ml-3 mt-3' >{item}</button>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-5 items-center'>
          <p className='text-2xl font-bold text-zinc-600'>History</p>
          <div className='w-[500px] h-[400px] bg-zinc-300 rounded-xl p-5 text-[20px] overflow-y-auto'>
            {history.map((item, index) => (
              <div className='flex justify-between mb-2' key={index}>
                <p className='font-bold'>{`Action -> ${item.action}`}</p>
                <p className='font-bold'>{`Previous -> ${item.prevVal}`}</p>
                <p className='font-bold'>{`Current -> ${item.curVal}`}</p>
              </div>
            ))}
          </div>
        </div>

      </div >
    </>
  )
}

export default App
