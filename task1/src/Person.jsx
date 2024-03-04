import React from 'react'

const TaskOne = (props) => {
    return (
        <>
            <h3 style={{ marginBottom: "20px" }}> TASK1 - Create a component named "Person" that takes two props - "name" and "age". The component should display the persons name and age in a paragraph element.
            </h3>

            <p style={{marginBottom:"10px"}}> Name- {props.name}</p>

            <p style={{marginBottom:"10px"}}> Age- {props.age}</p>

        </>
    )
}

export default TaskOne
