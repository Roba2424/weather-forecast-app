// src/HourlyForecast.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { WEATHER_URL } from "../../core/utils/constants";
import "./style.css";

const HourlyForecast = () => {
  const { day } = useParams();
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await axios.get(WEATHER_URL);
        setHourlyData(response.data.list.slice(day * 8, day * 8 + 8));
      } catch (error) {
        console.error("Error fetching hourly data:", error);
      }
    };
    fetchHourlyData();
  }, [day]);

  return (
    <div>
      <h2>Hourly Forecast for Day {parseInt(day) + 1}</h2>
      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hour">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            <p>Temp: {Math.round(hour.main.temp)}°C</p>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
            <p>{hour.weather[0].description}</p>
          </div>
        ))}
        <Link to={"/"}>5 forecast weather</Link>
      </div>
    </div>
  );
};

export default HourlyForecast;
