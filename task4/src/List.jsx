import React from 'react'

const List = (props) => {
    return (
        <>

            <ul>
                {props.items.map((value, index) => <li key={index} >{value}</li>)}
            </ul>

        </>
    )
}

export default List
