import './LoginForm.css'

function LoginForm() {
    return (
        <>
            <div className="login-container">
            <form className="login-form">
                <h2>Log to Web App</h2>
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="name@example.com" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <div className="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default LoginForm

