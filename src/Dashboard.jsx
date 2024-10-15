import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useState, useEffect } from "react"
import WeatherBlock from "./WeatherBlock.jsx"
import CurrentWeatherCard from "./CurrentWeatherCard.jsx"
import './Dashboard.css'
import { getWeatherDescription, getWeatherUniCode } from "./weatherUtils.js"

function Dashboard() {
    const [cookies, setCookies] = useCookies(['isLoggedIn'])
    const navigate = useNavigate()
    const [location, setLocation] = useState(null)
    const [weatherData, setWeatherData] = useState(null)
    const [currentWeatherData, setCurrentWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // get geolocation
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        } else {
            setDefaultLocation()
        }
    }, [])

    function success(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        setLocation({ latitude, longitude })
    }

    function error() {
        window.alert('Geolocation not available. Showing weather for Kyiv')
        setDefaultLocation()
    }

    function setDefaultLocation() {
        // set default coordinates for Kyiv
        const latitude = 50.4504
        const longitude = 30.5245
        setLocation({ latitude, longitude })
    }

    // fetch weather data when location is updated
    useEffect(() => {
        if (location) {
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max,wind_speed_10m_max`)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherData(data.daily)
                    setCurrentWeatherData(data.current)
                    setIsLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error)
                    setIsLoading(false)
                })
        }
    }, [location])

    // redirect to login page if not logged in
    useEffect(() => {
        if (!cookies.isLoggedIn) {
            navigate('/')
        }
    }, [cookies, navigate])

    // handle log out, redirect user to login page
    const handleLogOut = () => {
        setCookies('isLoggedIn', false)
        navigate('/')
    };

    // show the loader while the data is being fetched
    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <>
            <div className="top-section">
                <span className="main-image">🌈</span>
                <button className="sign-out-button" onClick={handleLogOut}>
                    Log out
                </button>
            </div>

            <div className="main-container">
            <div className="current-weather-card">
                <CurrentWeatherCard
                    date={currentWeatherData.time.slice(0, 10)}
                    weatherImage={getWeatherUniCode(currentWeatherData.weather_code)}
                    weatherDescription={getWeatherDescription(currentWeatherData.weather_code)}
                    currentTemperature={currentWeatherData.temperature_2m}
                    humidity={currentWeatherData.relative_humidity_2m}
                    windSpeed={currentWeatherData.wind_speed_10m}
                />
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
            </div>
        </>
    );
}

export default Dashboard