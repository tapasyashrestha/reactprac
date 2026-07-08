import { useState } from "react";
import SearchBar from "./Searchbar";
import WeatherCard from "./weatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  async function getWeather() {
    try {
      setError("")
      setLoading(true)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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

      <SearchBar
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      />
      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <weatherCard
        weather={weather} />



    </>
  );
}

export default App;