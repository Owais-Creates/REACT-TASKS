import { createContext, useState } from "react"

export const userContext = createContext();


const Context = (props) => {

    const [User, setUser] = useState([
        { id: 0, catName: "Black car", email: "blackcar@gmail.com" },
        { id: 1, catName: "White car", email: "whitecar@gmail.com" },
    ]);

    return (
        <userContext.Provider value={{ User, setUser }} >
            {props.children}
        </userContext.Provider>
    )
}

export default Context