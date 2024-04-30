import React, { useState } from 'react'

function Bmi() {

    const [bmi, setBmi] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState("");

    return (
        <>
            <div className='w-full h-screen bg-black flex justify-center items-center' >

                <div className='w-80 p-8 bg-zinc-200 flex flex-col items-center rounded-lg ' >

                    <h1 className='font-sans text-2xl font-bold mb-6 ' >BMI  Calculator</h1>

                    <div className='w-full' >
                        <p className='font-sans'>Weight in <span className='text-red-600 font-bold font-sans' >(kilograms)*</span></p>
                        <input onInput={
                            (e) => { setWeight(e.target.value) }
                        } className='w-full px-3 py-2 mt-1 rounded-md mb-4 font-sans' type="text" placeholder='Enter weight' />
                    </div>

                    <div className='w-full' >
                        <p className='font-sans'>Height <span className='text-red-600 font-bold font-sans' >(meters)*</span></p>
                        <input onInput={
                            (e) => { setHeight(e.target.value) }
                        } className='w-full px-3 py-2 mt-1 rounded-md font-sans' type="text" placeholder='Enter weight' />
                    </div>

                    <button onClick={
                        () => {
                            setBmi(weight / (height * height));

                            if (bmi < 18.5) { setResult("Underweight") }
                            else if (bmi > 18.5 && bmi < 24.9) { setResult("Normal Weight") }
                            else if (bmi > 25 && bmi < 29.9) { setResult("Overweight") }
                            else { setResult("Obese") }

                        }
                    } className='px-3 py-2 bg-blue-500 rounded-lg text-white w-full mt-5 font-sans'>Submit</button>

                    <button onClick={() => window.location.reload()} className='px-3 py-2 bg-zinc-400 rounded-lg text-black w-full mt-3 font-sans'>Reset</button>

                    <div className='mt-5 text-left w-full'>
                        <h2 className='font-sans '>Your <span className='font-bold font-sans'>BMI</span> is: {bmi.toFixed(2)} </h2>
                    </div>

                    <div className='w-full'>
                        <h2 className='mt-5 font-bold font-sans'> You are: {result} </h2>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Bmi
