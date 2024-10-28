export const getDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
};

export const getWeatherIcon = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};
