import React from 'react'

const Button = (props) => {
    return (
        <>
            <h3 style={{ marginBottom: "20px" }}>Create a component named "Button" that takes two props - "text" and "onClick". The co6ponent should display a button element with the given text and call the onClick function when clicked.  </h3>
           
           <button onClick={props.onClick}>{props.text}</button>

        </>
    )
}

export default Button
