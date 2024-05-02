import React from 'react'

function Navbar({ songData }) {
    return (
        <>
            <div className='w-full h-14 flex items-center justify-between py-20'>
                <h1 className='text-2xl font-sans font-bold text-orange-600 ml-20' >Music Player</h1>

                <div className='flex p-2 '>
                    <p className='font-sans font-semibold mr-20 text-[20px] text-orange-500'>Favourites</p>
                    <h3 className='text-black text-2xl'>{songData.filter(item => item.isFavourite).length}</h3>
                </div>
            </div>
        </>
    )
}

export default Navbar
