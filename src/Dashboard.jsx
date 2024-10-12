import {useNavigate} from "react-router-dom"
import {useCookies} from "react-cookie"
import {useState, useEffect} from "react"
import WeatherBlock from "./WeatherBlock.jsx";
import './Dashboard.css'

function Dashboard() {
    const [cookies] = useCookies(['isLoggedIn'])
    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.isLoggedIn) {
            navigate('/')
        }
    }, [cookies, navigate]);

    // fetch data
    const [weatherData, setWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=50.450034&longitude=30.524136&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,precipitation_probability_max,wind_speed_10m_max&timezone=GMT')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.daily);
                setWeatherData(data.daily);
                setIsLoading(false)
            });
    }, []);


    if(isLoading) {
        return <div className="loader"></div>
    }

    return (
        <>
            <div className="weather-container">
                {weatherData && weatherData.time.slice(0, 5).map((day, index) => (
                    <WeatherBlock
                        key={index}
                        day={weatherData.time[index]}
                        maxTemp={weatherData.temperature_2m_max[index]}
                        minTemp={weatherData.temperature_2m_min[index]}
                        precipitationProbability={weatherData.precipitation_probability_max[index]}
                        maxWindSpeed={weatherData.wind_speed_10m_max[index]}
                        rainSum={weatherData.rain_sum[index]}
                    />
                ))}
            </div>
        </>
    )
}

export default Dashboard