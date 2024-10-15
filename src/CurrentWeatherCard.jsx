import './CurrentWeatherCard.css'

function CurrentWeatherCard(props) {
    return (
        <>
            <p className="date">Today</p>
            <p className="date-small">{ props.date }</p>
            <span className="weather-icon">{props.weatherImage}</span>
            <p className="description">{props.weatherDescription}</p>

            <div className="one-info">
            <span className="temperature">Temperature: </span>
            <span>{props.currentTemperature} °C</span>
            </div>

            <div className="one-info">
            <span className="details">Humidity: </span>
            <span>{ props.humidity }%</span>
            </div>

            <div className="one-info">
            <span className="details">Wind speed: </span>
            <span>{ props.windSpeed } km/h</span>
            </div>
        </>
    )
}

export default CurrentWeatherCard