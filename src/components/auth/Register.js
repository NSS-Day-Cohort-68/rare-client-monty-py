import { useState } from "react"
import { createUser } from "../../services/UserService.js"

export const Register = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: ""
    })
    const registerNewUser = () => {
        return createUser(user).then((createdUser) => {
            if(createdUser.hasOwnProperty("id")){
                localStorage.setItem(
                    "rareClient-user",
                    JSON.stringify({
                        id: createUser.id
                    })
                )
            }
        })
    }
}