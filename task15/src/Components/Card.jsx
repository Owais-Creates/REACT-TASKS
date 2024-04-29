import React from 'react'

function Card() {

    const data = [
        {
            name: "Apple",
            src: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
            description: "Apple is lul"
        },
        {
            name: "Banana",
            src: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Ba Nae Nae"
        },
        {
            name: "Tangerine",
            src: "https://images.pexels.com/photos/2592576/pexels-photo-2592576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Oange"
        }
    ]

    return (
        <>
            <div className="w-full h-screen bg-zinc-500 flex justify-center items-center gap-10 overflow-hidden">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md">
                        <div className="h-30 w-full object-cover">
                            <img className='h-' src={item.src} alt={item.name || "Image Description"} /> {/* Descriptive alt text */}
                        </div>
                        <div className="bg-zinc-300 text-center px-4 py-3"> {/* Added padding for cleaner layout */}
                            <h1 className="mt-3 font-bold">{item.name}</h1>
                            <p className="mt-3">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Card
