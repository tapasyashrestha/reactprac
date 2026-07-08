function WeatherCard({
    weather,
    
}) {
    return (
        <>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>🌡️ Temperature: {weather.main.temp}°C</p>
                    <p>☁️ Weather: {weather.weather[0].main}</p>
                    <p>💧 Humidity: {weather.main.humidity}%</p>
                    <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
                </div>
            )}
        </>
    )
export default WeatherCard;

