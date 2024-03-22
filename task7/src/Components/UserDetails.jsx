import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HiOutlineHandRaised } from "react-icons/hi2";

const UserDetails = () => {

    const { name } = useParams()
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/users")
    }

    return (
        <div className='mt-10 flex flex-col items-center w-1/2 bg-zinc-200 m-auto ' >
            <h1 className='text-5xl' >User Detail</h1>
            <p className='text-2xl mt-4 mb-4 ' >Hi {name} <HiOutlineHandRaised className='text-3xl mt-3' />  </p>
            <button onClick={handleNavigate} className='rounded-md px-3 py-2 bg-red-200 mb-5' >Go back</button>
        </div>
    )
}

export default UserDetails