import { Link, Outlet } from "react-router-dom"

function Users() {
    return (
        <div className='mt-10 flex flex-col items-center w-1/2 bg-zinc-200 m-auto ' >
            <h1 className='text-5xl' >Users</h1>
            <div className='flex w-1/2 flex-col mt-4' >
               <Link className="bg-red-200 p-3 text-2xl mb-3 hover:bg-red-300" to="/users/john" >John</Link>
               <Link className="bg-red-200 p-3 text-2xl mb-3 hover:bg-red-300" to="/users/sam" >Sam</Link>
               <Link className="bg-red-200 p-3 text-2xl mb-3 hover:bg-red-300" to="/users/kallu" >Kallu</Link>

            </div>
            <Outlet/>
        </div>
        
    )
}

export default Users
