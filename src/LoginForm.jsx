import './LoginForm.css'
import { useState, useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const userData = {
    email: 'liza@gmail.com',
    password: 'liza3'
}

function LoginForm() {
    const [cookies, setCookie] = useCookies(['isLoggedIn'])
    const [isInvalidLogIn, setInvalidLogIn] = useState(false)

    // info about state Remember me
    const [rememberMe, setRememberMe] = useState(false)

    const toggleInvalidLogIn = () => {
        setInvalidLogIn(!isInvalidLogIn)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === userData.email && password === userData.password) {
            setCookie('isLoggedIn', true)
            navigate('/dashboard')

        }
        // not successful log in
        else {
            toggleInvalidLogIn()
            setCookie('isLoggedIn', false)
        }

        // save login and password to cookies if Remember me is chosen
        if(rememberMe) {
            setCookie('user', email)
            setCookie('password', password)
        }
        // not saving user data to cookies
        else {
            setCookie('user', null)
            setCookie('password', null)
        }
    }


    // to fill form is there is saved data in cookies (email and password)
    useEffect(() => {
        if (cookies.user && cookies.password) {
            setEmail(cookies.user)
            setPassword(cookies.password)
            setRememberMe(true)
        }

        setCookie('isLoggedIn', false)

    }, [cookies])

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
                    <input type="email"
                           id="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           name="email"
                           placeholder="name@example.com" required/>

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           id="password"
                           name="password" required/>

                    <div className="remember-me">
                        <input type="checkbox"
                               checked={rememberMe}
                               onChange={(e) => setRememberMe(e.target.checked)}
                               id="remember"
                               name="remember"
                        />
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

