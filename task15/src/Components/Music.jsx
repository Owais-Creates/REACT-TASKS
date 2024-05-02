import React from 'react'

function Music({ values, handleClick, index }) {
  const { name, song, image, isFavourite } = values;
  return (
    <>
      <div className='w-[300px] h-[150px] bg-white p-5 flex gap-7 items-center relative rounded-lg' >

        <img className='w-[50%] h-[80%] bg-slate-600 rounded-lg overflow-hidden ' src={image} alt="" />

        <div>
          <h1 className='font-sans uppercase font-bold mb-1 text-left'>{song}</h1>
          <h3 className='font-sans'>{name}</h3>

        </div>

        <button onClick={() => handleClick(index)} className={`py-2 px-5 rounded-xl ${isFavourite ? 'bg-green-400 text-black' : 'bg-red-400 text-white '} absolute -bottom-[12%] left-1/2 right-1/2 font-sans font-semibold`} >{isFavourite ? "Added" : "Favoutite"}</button>

      </div>



    </>
  )
}

export default Music
