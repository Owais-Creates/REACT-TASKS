import React, { useState } from 'react'

function UseState() {

    const [val, setVal] = useState({ name: "owais", isBanned: false })

    return (

        <>
            <h1>Name: {val.name}</h1>
            <h1>isBanned: {val.isBanned.toString()}</h1>
            <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })} className={`px-2 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-600"} text-white rounded-lg`} >{val.isBanned ? "Changed" : "Change"}</button>
        </>
    )
}

export default UseState
