import axios from "axios";
import { WEATHER_URL } from "../../core/utils/constants";
import { useEffect, useState } from "react";
import "./style.css";
import DayItem from "../DayItem";
import { Link } from "react-router-dom";
import { getDayName } from "../../core/functions/date-function";

const Weather = () => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(WEATHER_URL);
        const dailyData = response.data.list.filter((item) => {
          return new Date(item.dt * 1000).getHours() === 10;
        });
        setForecast(dailyData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="main-container">
      <h1>5-Day Weather Forecast for Yerevan</h1>
      <div className="forecast-day-container">
        {forecast.map((day, index) => (
          <Link key={index} to={`/${getDayName(day.dt * 1000)}`}>
            <DayItem key={index} day={day} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Weather;
