import React from 'react'

function AddFriends({ values, handleClick, index }) {
  const { name, profileImage, isFriend } = values;



  return (
    <>
      <div className='w-52 h-64 bg-zinc-300 rounded-lg overflow-hidden '>

        <div className='w-full h-[60%]' >
          <img className='object-center w-full h-full' src={profileImage} alt="" />
        </div>

        <h1 className='my-3 ml-2 font-sans text-[20px] font-bold' >{name}</h1>

        <button onClick={() => handleClick(index)} className={`' ml-2 px-5 py-2 ${isFriend ? 'bg-green-500' : ' bg-blue-500'} text-white rounded-lg' `}>
          {isFriend ? "Friend" : "Add"}
        </button>

      </div>
    </>
  )
}

export default AddFriends
