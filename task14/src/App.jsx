import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegFaceSadCry } from "react-icons/fa6";


import './App.css'; // Importing app.css file


const App = () => {
  const [todo, setTodo] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [error,setError] = useState("")

  const addTask = () => {
    if (todo.trim() === ''){
      setError("Input field is empty please enter something");
      return;
    }
    setTodoData([...todoData, todo]);
    setTodo('');
  };

  const deleteTodo = (index) => {
    const updatedItems = todoData.filter((item, id) => id !== index);
    setTodoData(updatedItems);
  };

  const handleError = () => {
    setError("")
  }
  

  return (
    <>
      <div className='w-full h-screen bg-gray-400 flex justify-center'>
        <div className='main-container w-[500px] h-[650px] p-9 bg-slate-100 mt-12'>
          <h1 className='text-2xl text-center mb-10'>Todo List</h1>
          <input
            className='w-full p-3'
            type='text'
            placeholder='Here...'
            value={todo}
            onFocus={handleError}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className='bg-red-200 p-3 mt-2' onClick={addTask}>
            Add Task
          </button>
          {error}
          <div className='mt-5 text-center text-2xl'>
            <ul className='text-left font-mono '>
              {todoData.length > 0 ? (

                todoData.map((elem, index) => (

                  <div key={index} className='flex justify-between items-center mb-8 '>
                    <li className='todo-list-item text-[20px p-2 w-[350px] '><p>{elem}</p></li>
                    <div>
                      <button className='text-[20px] ' onClick={() => deleteTodo(index)} ><FaRegTrashAlt /></button>
                      <button className='text-[20px] ml-4 '><FaEdit /></button>
                    </div>
                  </div>

                ))

              ) : (
                <h2 className='text-center font-bold ' >NO TASKS YET <FaRegFaceSadCry className='inline' /> </h2>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
