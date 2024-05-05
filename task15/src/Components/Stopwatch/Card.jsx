import React from 'react'

function Card({ value, onClick }) {
  return (
    <div onClick={onClick} id='board' className='w-[200px] h-[200px] flex justify-center items-center text-5xl' >
      <p className='font-sans font-extrabold'>{value}</p>
    </div>
  )
}

export default Card
