import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Users from "../Components/Users"
import About from "../Components/About"

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Routing