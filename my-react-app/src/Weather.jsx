import React, {useState, useEffect} from 'react';
import axiosInstance from './axiosInstance'

function Weather() {
    const [weather, setWeather] = useState(null);
    const API_KEY = 'ba7f4889df1f48e7f3e7693818973a0d';
    const lat = 49.282368;
    const lon = -122.794361;
    const city = "Vancouver"

    useEffect(() => {
        async function fetchWeather() {
            try {
                const weatherRes = await axiosInstance.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${API_KEY}`);
                setWeather(weatherRes.data);
            } catch (error) {
                console.error("Error fetching weather data", error);
            }
        }
        fetchWeather();
    }, [API_KEY]);

    return (
        <div className="weather-info">
            {weather ? (
                <>
                    <h2>Weather in {weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp} °C </p>
                    <p>Feels Like: {weather.main.feels_like} °C</p>
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Weather;