function SearchBar({
  city,
  setCity,
  getWeather,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getWeather();
          }
        }}
      />

      <button onClick={getWeather}>
        Search
      </button>
    </>
  );
}

export default SearchBar;