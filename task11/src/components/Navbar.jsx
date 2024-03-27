import React from 'react'

const Navbar = ({ data }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", paddingBlock: "20px", paddingInline: "100px", backgroundColor: "red", marginBottom: "50px" }} >
            <div>HELLO</div>
            <div>Favourites - {data.filter(item => item.added).length}</div>
        </nav>
    )
}

export default Navbar