import React, { useState } from 'react'

function Quiz() {

    const [increment, setIncrement] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState(false);


    const quizQuestions = [
        {
            ques: "Ques1 -> Who is Bihari",
            option1: "kallu",
            option2: "sallu",
            option3: "dallu",
            answer: "kallu"
        },
        {
            ques: "Ques2 -> Who is Chamar",
            option1: "Dalit",
            option2: "Me",
            option3: "You",
            answer: "You"
        }
    ]

    return (
        <>
            <div className='w-full h-screen bg-zinc-400 flex justify-center items-center flex-col ' >

                {increment < quizQuestions.length ?

                    <div className='w-[500px]  bg-white flex flex-col p-3'>

                        {quizQuestions.map((elem, index) => (
                            index === increment ?
                                <div key={index}>
                                    <h1 className='font-sans text-2xl font-bold mx-10 my-5' > {elem.ques}</h1>

                                    {/* Options section */}
                                    <div className='w-full p-3 bg-zinc-200' >
                                        <p onClick={
                                            (e) => { setAnswer(e.target.innerText) }
                                        } className='bg-black text-white text-1xl font-bold font-sans pl-5 py-4 mb-5 cursor-pointer hover:bg-slate-400 hover:text-black' >{elem.option1}</p>

                                        <p onClick={
                                            (e) => { setAnswer(e.target.innerText) }
                                        } className='bg-black text-white text-1xl font-bold font-sans pl-5 py-4 mb-5 cursor-pointer hover:bg-slate-400 hover:text-black'  >{elem.option2}</p>

                                        <p onClick={
                                            (e) => { setAnswer(e.target.innerText) }
                                        } className='bg-black text-white text-1xl font-bold font-sans pl-5 py-4 cursor-pointer hover:bg-slate-400 hover:text-black' >{elem.option3}</p>
                                    </div>
                                </div>
                                :
                                null
                        ))}

                        <button onClick={() => {
                            if (answer === quizQuestions[increment].answer) {
                                setScore(score + 1);
                            }
                            setIncrement(increment + 1);
                            setAnswer("");
                            setResult(true)

                        }} className='mt-5 px-10 py-2 bg-black text-white rounded-lg cursor-pointer' >Submit</button>
                    </div>

                    :

                    <div>
                        {result == false ? <h1 >Finish the game for score </h1> : <h1 className='text-5xl text-red-700 font-sans font-bold'  ><span className='text-5xl font-sans font-bold' >Score</span> - {score} </h1>}
                    </div>
                }

            </div>
        </>
    )
}

export default Quiz
