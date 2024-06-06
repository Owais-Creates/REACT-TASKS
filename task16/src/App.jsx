import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleList = () => {
    setList([...list, value]); 
    setValue("")
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-800 flex items-center flex-col pt-16">
        <h1 className="font-sans text-3xl font-bold text-zinc-500 uppercase">
          Todo list app
        </h1>

        <input
          className="w-[300px] h-[40px] bg-zinc-200 rounded-lg mt-10 p-3 mb-4"
          type="text"
          value={value}
          onChange={(e) => handleValue(e)}
        />

        <button
          className="bg-green-500 py-2 px-6 rounded-lg text-black font-sans font-bold"
          disabled = {value.length === 0}
          onClick={handleList}
        >
          Add
        </button>

        <div className="w-[600px] h-[450px] bg-zinc-400 mt-8 rounded-2xl overflow-auto">
          <ul className="py-5">
            {list.map((item, i) => (
              <li key={i} className="text-xl bg-black text-white pl-4 py-5 mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
