import React from 'react'
import { useState } from 'react'

const App = () => {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [validateBmi, setValidateBmi] = useState("")

  let validationMessage = "";
  const calcBMI = () => {

    if (height == 0 || weight == 0) {
      validationMessage = "Enter something"
      setValidateBmi(validationMessage);
      return
    }

    const heightMeters = height / 100;
    const finalBmi = (weight / (heightMeters * heightMeters)).toFixed(2)
    setbmi(finalBmi);

    if (finalBmi > 25) {
      validationMessage = "You are overweight";
    } else if (finalBmi >= 18 && finalBmi <= 25) {
      validationMessage = "Your BMI is good";
    } else {
      validationMessage = "You are underweight";
    }
    setValidateBmi(validationMessage);

  }

  return (
    <>
      <div className='w-full h-screen flex items-center flex-col ' >

        <div className='h-[600px] w-[500px] bg-gray-500 flex items-center flex-col' >

          <h1 className='font-mono text-5xl font-bold mt-10 mb-20 uppercase ' >BMI Calculator</h1>

          <div>
            <input className='border-2 block wi[70%] mb-9 px-[20px] py-[5px] border-black' type="text" placeholder='Enter height in CM' onChange={(e) => setHeight(e.target.value)} />
            <input className='border-2 block wi[70%] mb-9 px-[20px] py-[5px]  border-black' type="text" placeholder='Enter weight in KG' onChange={(e) => setWeight(e.target.value)} />
            <h2>Your BMI - {bmi} </h2>
            <button onClick={calcBMI} className='mt-10 px-[15px] py-[5px] bg-black text-white rounded-lg'>
              Compute
            </button>
            <p className='text-2xl mt-10 font-mono' > {validateBmi}</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default App      