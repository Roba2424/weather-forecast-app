import { getWeatherIcon } from "../../core/functions/date-function";

const HourItem = ({ hour }) => {
  return (
    <div className="hour">
      <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
      <p>Temp: {Math.round(hour.main.temp)}°C</p>
      <img
        src={getWeatherIcon(hour.weather[0].icon)}
        alt={hour.weather[0].description}
      />
      <p>{hour.weather[0].description}</p>
    </div>
  );
};

export default HourItem;
