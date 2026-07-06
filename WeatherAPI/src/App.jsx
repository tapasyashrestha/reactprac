import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function getWeather() {
    try {
      setError("")
      setLoading(true)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e2947facca3314e8b57c2aba42bf734&units=metric`
      );

      const data = await response.json();
      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        return;
      }

      setWeather(data);

      console.log(data);
    } catch (err) {
      setError("Something went wrong");
      setWeather(null);
    } finally {
      setLoading(false);
    }

  }

  return (
    <>
      <h1>🌦️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={getWeather}>Search</button>
      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

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
  );
}

export default App;