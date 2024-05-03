import React, { useRef, useState } from 'react'

function FormHandling() {

    const uname = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    const [value, setValue] = useState({ name: "", age: "", email: "" })

    const handleSubmit = (e) => {
        e.preventDefault();

        setValue({
            ...value,
            name: uname.current.value,
            age: age.current.value,
            email: email.current.value
        })
    }

    return (
        <>
            <div className='flex flex-col '>
                <h1 className='text-3xl font-sans font-bold uppercase mb-10' >Create a user Card by taking user's information</h1>

                <form action="#" onSubmit={handleSubmit} >
                    <label className='font-sans font-semibold ' htmlFor="name">Enter your name</label>
                    <input ref={uname} className='mb-5 block py-2 px-4 rounded-lg ' type="text" id='name' name='Firstname' placeholder='Enter your name' required />

                    <label className='font-sans font-semibold ' htmlFor="name">Enter your age</label>
                    <input ref={age} className='mb-5 block py-2 px-4 rounded-lg' type="text" id='name' name='Firstname' placeholder='Enter your name' required />

                    <label className='font-sans font-semibold ' htmlFor="name">Enter your email</label>
                    <input ref={email} className='mb-2 block py-2 px-4 rounded-lg' type="text" id='name' name='Firstname' placeholder='Enter your name' required />

                    <input className='mb-6 py-2 px-6 bg-zinc-800 text-white font-bold rounded-xl font-sans uppercase text-[17px] cursor-pointer' type="submit" value={"submit"} />
                </form>

                <div className='bg-zinc-300 p-10 w-fit rounded-xl flex justify-center flex-col'>

                    <h1 className='text-2xl font-sans font-bold mb-5'>Name - <span className='font-sans text-zinc-500'>{value.name}</span></h1>
                    <h1 className='text-2xl font-sans font-bold mb-5'>Age - <span className='font-sans text-zinc-500'>{value.age}</span></h1>
                    <h1 className='text-2xl font-sans font-bold mb-5'>email - <span className='font-sans text-zinc-500'>{value.email}</span></h1>

                </div>
            </div>
        </>
    )
}

export default FormHandling

