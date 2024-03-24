
import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div style={{ backgroundColor: color, height: "500px", width: "100%" }}></div>

      <button
        onClick={(e) => setColor(e.target.innerText.toLowerCase())}
        className='border p-10 bg-slate-700'>red</button>

      <button
        onClick={(e) => setColor(e.target.innerText.toLowerCase())}
        className='border p-10 bg-slate-700'>blue</button>

      <button
        onClick={(e) => setColor(e.target.innerText.toLowerCase())}
        className='border p-10 bg-slate-700'>purple</button>
    </>
  );
}

export default App;
