import { getWeatherIcon } from "../../core/functions/date-function";

const DayItem = ({ day }) => {
  const weatherIcon = day.weather[0].icon;

  return (
    <div className="day-item">
      <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
      <p>High: {Math.round(day.main.temp_max)}°C</p>
      <p>Low: {Math.round(day.main.temp_min)}°C</p>
      <img
        src={getWeatherIcon(weatherIcon)}
        alt={day.weather[0].description}
      />
      <p>{day.weather[0].description}</p>
    </div>
  );
};

export default DayItem;
