import './LoginForm.css'
import { useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
//import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const userData = {
    email: 'liza@gmail.com',
    password: 'liza3'
}

function LoginForm() {
    const [, setCookie] = useCookies(['isLoggedIn'])
    const [isInvalidLogIn, setInvalidLogIn] = useState(false)

    const toggleInvalidLogIn = () => {
        setInvalidLogIn(!isInvalidLogIn)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === userData.email && password === userData.password) {
            navigate('/dashboard')
            setCookie('isLoggedIn', true)
        }
        // not successful log in
        else {
            toggleInvalidLogIn()
            setCookie('isLoggedIn', false)
        }
    }
    return (
        <>
            <div className="app-background">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Log to Weather App</h2>
                    <div className="invalid-data" style={{display: isInvalidLogIn ? 'block' : 'none'}}>
                        <span>Invalid email or password</span>
                    </div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                           name="email" placeholder="name@example.com" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           id="password" name="password" required/>

                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default LoginForm

