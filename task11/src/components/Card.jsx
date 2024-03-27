import React from 'react'

const Card = ({ data, handleClick, index }) => {

    const { name, added } = data;

    return (
        <>
            <div style={{ height: "100px", width: "150px", padding: "20px", backgroundColor: "red", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <h3>{name}</h3>
                <button style={{ padding: "7px" }} onClick={() => handleClick(index)} >{added ? "Added" : "Add"}</button>
            </div >
        </>
    )
}

export default Card