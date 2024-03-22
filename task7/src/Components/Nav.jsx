import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="mt-10 flex justify-center gap-5" >

            {/* Making active links using style in Router-DOM */}
            <NavLink to={"/"} style={(e) => {
                return {
                    color: e.isActive ? "tomato" : "",
                    fontWeight: e.isActive ? "bolder" : ""
                }
            }} >
                Home
            </NavLink>

            {/* Making active links using className */}
            <NavLink to={"/users"} className={(e) => {
                return [
                    e.isActive ? "text-red-600" : "",
                    e.isActive ? "font-bold" : ""
                ].join(" ")
            }} >
                Users
            </NavLink>

            <NavLink to={"/about"} >About</NavLink>
        </nav>
    )
}

export default Nav