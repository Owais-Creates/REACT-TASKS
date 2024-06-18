import React, { useState, useRef } from 'react';

const App = () => {
  const dummy = [
    {
      type: "text",
      placeholder: "enter name",
      button: "Next",
      key: "uname"
    },
    {
      type: "email",
      placeholder: "enter email",
      button: "Next",
      key: "email"

    },
    {
      type: "date",
      placeholder: "enter date of birth",
      button: "Next",
      key: "dob"
    },
    {
      type: "password",
      placeholder: "enter password",
      button: "Submit",
      key: "password"
    }
  ];

  const dummyResult = {
    uname: "",
    email: "",
    dob: "",
    password: ""
  }

  const [data, setData] = useState(dummy);
  const [result, setResult] = useState(dummyResult);
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const handleNext = () => {
    const currentKey = data[index].key;
    const currentValue = inputRef.current.value;

    //Update the result object
    setResult((prevResult) => {
      const updatedResult = { ...prevResult, [currentKey]: currentValue };

      if (index === data.length - 1) {
        alert(JSON.stringify(updatedResult, null, 2));
      }

      return updatedResult;
    });

    if (index < data.length - 1 && inputRef.current.value != 0) {
      setIndex(prev => prev + 1);
    }
    inputRef.current.value = "";
  };


  console.log(result);

  const handleBack = (e) => {
    e.preventDefault();
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  return (
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center flex-col'>
      <h1 className='text-4xl uppercase font-bold font-sans'>MultiStep form</h1>

      {index > 0 && (
        <a
          className='mt-10'
          href="/"
          onClick={handleBack}
        >
          back
        </a>
      )}

      <form action="/">
        <div className='flex flex-col gap-3'>
          <input
            ref={inputRef}
            type={data[index].type}
            placeholder={data[index].placeholder}
            required
          />
          <button onClick={handleNext} className='py-3 px-8 bg-black text-white rounded-lg'>
            {data[index].button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
