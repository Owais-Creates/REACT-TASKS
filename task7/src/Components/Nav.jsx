import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="mt-10 flex justify-center gap-5" >
            <NavLink to={"/users"} >Users</NavLink>
            <NavLink to={"/about"} >About</NavLink>
        </nav>
    )
}

export default Nav