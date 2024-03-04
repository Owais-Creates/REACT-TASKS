import React from 'react'

const Header = (props) => {
    return (
        <>
            <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft:"30px" }}>

                <h1>{props.title}</h1>

                <ul style={{
                    display: "flex", gap: "35px", listStyle: "none", marginRight: "30px",
                    fontSize: "20px"
                }}>
                    <li>Learn</li>
                    <li>Reference</li>
                    <li>Community</li>
                </ul>


            </header>
        </>
    )
}

export default Header
