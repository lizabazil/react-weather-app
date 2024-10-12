import './WeatherBlock.css'

function WeatherBlock(props) {
    return (
        <>
            <div className="weather-block">
                <p>{props.day}</p>
                <p className="bold">Max temperature:</p>
                <p className="temperature">{props.maxTemp} °C</p>
                <p className="bold">Min temperature:</p>
                <p className="temperature">{props.minTemp} °C</p>
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