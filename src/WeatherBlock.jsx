import './WeatherBlock.css'

function WeatherBlock(props) {
    return (
        <>
            <div className="weather-block">
                <p className="day">{props.day}</p>
                <span className="image">{props.weatherImage}</span>
                <p>{props.weatherDescription}</p>
                <span className="bold">High: </span>
                <span className="temperature">{props.maxTemp} °C</span>
                <p></p>
                <span className="bold">Low: </span>
                <span className="temperature">{props.minTemp} °C</span>
                <p className="bold">Precipitation probability:</p>
                <p className="temperature">{props.precipitationProbability}%</p>
                <p className="bold">Max wind speed:</p>
                <p className="temperature">{props.maxWindSpeed} km/h</p>
                <p className="bold">Rain sum:</p>
                <p className="temperature">{props.rainSum} mm</p>


            </div>
        </>
    )
}

export default WeatherBlock