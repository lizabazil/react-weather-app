import './WeatherBlock.css'

function WeatherBlock(props) {
    return (
        <>
            <div className="weather-block">
                <p className="day">{props.day}</p>
                <p>{props.weatherDescription}</p>
                <p className="image">{props.weatherImage}</p>
                <span className="bold high">High: </span>
                <span className="temperature">{props.maxTemp} °C</span>
                <p></p>
                <span className="bold low">Low: </span>
                <span className="temperature">{props.minTemp} °C</span>
                <p className="bold">Max wind speed:</p>
                <p className="temperature">{props.maxWindSpeed} km/h</p>
                <p className="bold">Precipitation probability:</p>
                <p className="temperature">{props.precipitationProbability}%</p>
                <p className="bold">Precipitation amount:</p>
                <p className="temperature">{props.precipitationSum} mm</p>


            </div>
        </>
    )
}

export default WeatherBlock