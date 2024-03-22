import { createContext, useState } from "react"

export const userContext = createContext();


const Context = (props) => {

    const [user, setUser] = useState([
        { id: 0, catName: "Black car", email: "blackcar@gmail.com" },
        { id: 1, catName: "White car", email: "whitecar@gmail.com" },
        { id: 2, catName: "Oange car", email: "oangecar@gmail.com" },
    ]);

    return (
        <userContext.Provider value={{ user, setUser }} >
            {props.children}
        </userContext.Provider>
    )
}

export default Context