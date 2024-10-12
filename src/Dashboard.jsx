import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useEffect } from "react"

function Dashboard() {
    const [cookies] = useCookies(['isLoggedIn'])
    const navigate = useNavigate()

    useEffect(() => {
        if(!cookies.isLoggedIn) {
            navigate('/')
        }
    }, [cookies, navigate]);

    return <h2>Here is dashboard</h2>
}

export default Dashboard