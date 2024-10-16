import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import './App.css'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App