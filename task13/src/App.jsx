// HOOKS PRACTICE
// Change the text on a click.

import React, { useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState(true);

  const handleClick = () => {
    setHeading(!heading)
  }

  return (

    <>
      <div style={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "cursive", fontSize: "3rem", backgroundColor: "gray", height: "100vh" }} >
        <h1>{
          heading ? "#0DaysJavascript" : "#100DaysJavascript"
        }</h1>
        <button style={{ padding: "10px", fontFamily: "cursive", fontSize: "1rem", outline: "none", backgroundColor: "yellow", border: "none" }} onClick={handleClick} >{heading ? "CLick me" : "Take me back"} </button>
      </div>
    </>

  )
}

export default App