import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Users from "../Components/Users"
import About from "../Components/About"
import UserDetails from "../Components/UserDetails"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />}>
                <Route path="/users/:name" element={<UserDetails />} />
            </Route>

            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Routing