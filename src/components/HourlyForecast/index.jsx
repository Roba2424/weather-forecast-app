import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { WEATHER_URL } from "../../core/utils/constants";
import "./style.css";
import HourItem from "../HourItem";

const HourlyForecast = () => {
  const { day } = useParams();
  console.log(day, "day");
  const [hourlyData, setHourlyData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const response = await axios.get(WEATHER_URL);
        console.log(response.data.list, "DATA");
        const filteredHourly = response.data.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000);
          const forecastDay = forecastDate
            .toLocaleDateString("en-US", { weekday: "long" })
            .toLowerCase();
          return forecastDay === day;
        });

        setHourlyData(filteredHourly);
      } catch (error) {
        console.error("Error fetching hourly data:", error);
      }
    };
    fetchHourlyData();
  }, [day]);

  return (
    <div>
      <h2>Hourly Forecast for Day {day}</h2>
      <div className="hourly-forecast">
        {hourlyData.map((hour, index) => (
          <HourItem key={index} hour={hour} />
        ))}
      </div>
      <Link to={"/"}>5 forecast weather</Link>
    </div>
  );
};

export default HourlyForecast;
