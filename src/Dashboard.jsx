import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import WeatherBlock from "./WeatherBlock.jsx"
import './Dashboard.css'
import {getWeatherDescription, getWeatherUniCode} from "./weatherUtils.js"
import weatherBlock from "./WeatherBlock.jsx";

function Dashboard() {
    const [cookies, setCookies] = useCookies(['isLoggedIn'])
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
        fetch('https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current=weather_code,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max,wind_speed_10m_max')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.daily);
                setWeatherData(data.daily);
                setIsLoading(false)
            });
    }, []);

    // handle log out, redirect user to login page
    const handleLogOut = () => {
        setCookies('isLoggedIn', false)
        //setCookies('user', null)
        navigate('/')
    }


    // show the loader while the data is being fetched
    if(isLoading) {
        return <div className="loader"></div>
    }

    return (
        <>
            <div className="top-section">
                <span className="main-image">🌈</span>
                <button className="sign-out-button" onClick={handleLogOut}>Log out</button>
            </div>

            <div className="weather-container">
                {weatherData && weatherData.time.slice(0, 5).map((day, index) => (
                    <WeatherBlock
                        key={index}
                        weatherImage={getWeatherUniCode(weatherData.weather_code[index])}
                        weatherDescription={getWeatherDescription(weatherData.weather_code[index])}
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