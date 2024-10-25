//API's
export const WEATHER_API_KEY = "22fe1cdaae3cc8535b05cca9ff2a32cf";
export const city = "Yerevan";

//Routers
export const ROUTE_CONSTANTS = {
  WEATHER: "/weather",
  HOURLY_FORECAST: "/hourly-forecast",
};

//URL's
export const WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${WEATHER_API_KEY}`;
