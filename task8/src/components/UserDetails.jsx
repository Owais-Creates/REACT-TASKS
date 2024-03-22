import React, { useContext } from 'react'
import { userContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {

  const { user } = useContext(userContext);
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <div className='flex items-center flex-col gap-4'>

        <h1 className='text-2xl' ><span className='text-3xl text-red-600 font-bold' >NAME</span> - {user[id].catName}</h1>

        <h1 className='text-2xl' ><span className='text-3xl text-red-600 font-bold' >EMAIL</span> - {user[id].email}</h1>

        <button onClick={() => navigate(-1)} className='py-2 px-5 bg-red-600 rounded-md text-white cursor-pointer '>Go back</button>

      </div>

    </>
  )
}

export default UserDetails