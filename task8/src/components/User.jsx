import React, { useContext } from 'react'
import { userContext } from '../Context/Context'
import { Link } from 'react-router-dom';

const User = () => {

    const { user } = useContext(userContext);

    return (
        <>
            <div className='flex flex-col items-center' >
                <h1 className='text-4xl' >User Details</h1>

                {user.map((u) => (
                    <div key={u.id} className='bg-blue-200 mt-7 py-2'>
                        <Link to={`/user/${u.id}`} className='px-8  text-2xl' >{u.catName}</Link>
                    </div>
                ))}

            </div>
        </>
    )
}

export default User