import { useState } from "react"
import { createUser, getUserByEmail } from "../../services/UserService.js"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: ""
    })

    let navigate = useNavigate()

    const registerNewUser = () => {
        return createUser(user).then((createdUser) => {
            if(createdUser.hasOwnProperty("id")){
                localStorage.setItem(
                    "rareClient-user",
                    JSON.stringify({
                        id: createUser.id
                    })
                )

                navigate("/")
            }
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        getUserByEmail(user.email).then((res) => {
            if(res.valid){
                window.alert("Account with that email already exists. Please enter a new one.")
            } else {
                registerNewUser()
            }
        })
    }

    const handleInputChange = (e) => {
        const copy = {...user }
        copy[e.target.id] = e.target.value
        setUser(copy)
    }

    return (
    <div className="register-main-container" onSubmit={handleRegister}>
        <form className="register-form">
        <h1>Rare</h1>
        <h4>Sign Up!</h4>
        <fieldset>
            <div className="form-group">
                <input 
                id="first_name"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="First Name"
                value={user.first_name}
                required
                autoFocus>
                </input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <input 
                id="last_name"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={user.last_name}
                required
                autoFocus>
                </input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <input 
                id="username"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="Username"
                value={user.username}
                required
                autoFocus>
                </input>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <input 
                id="email"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                placeholder="email"
                value={user.email}
                required
                autoFocus>
                </input>
            </div>
        </fieldset>
        <fieldset>
            <div className="register-btn-container">
                <button className="register-btn" type="submit">
                    Sign Up
                </button>
            </div>
        </fieldset>
        </form>
    </div>
    )
}