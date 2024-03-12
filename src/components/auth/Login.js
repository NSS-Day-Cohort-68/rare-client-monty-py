import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { getUserByEmail } from '../../services/UserService'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleSignIn = (event) => {
        event.preventDefault()

        getUserByEmail(email.toLocaleLowerCase()).then((res)=>{
            if (res.valid) {
                const userId = res.token
                localStorage.setItem(
                    "rareClient-user",
                    JSON.stringify({
                        id: userId
                    })
                )
                navigate("/")
            } else {
                window.alert("Invalid Email")
            }
        })
    }


    return (
    <div className='login-main-container' onSubmit={handleSignIn}>
        <form className='login-form'>
            <h1>Welcome To Rare Client</h1>
            <h4>Please log in here</h4>
            <fieldset>
                <div className='form-group'>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Email Address'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='login-btn-container'>
                    <button className='login-btn' type='submit'>
                        Log In
                    </button>
                </div>
            </fieldset>
        </form>  
        <div className='register-link-container'>
            Don't have an account yet? <Link to="/register">Click here to sign up!</Link>
        </div>
    </div>
    )
}


