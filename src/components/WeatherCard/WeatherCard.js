import { weatherOptions } from "../../utils/constants";
import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });
  console.log(weatherOption);
  const weatherOptionUrl = weatherOption.url || "";
  return (
    <section className="weather" id="weather">
      <p className="weather_info">
        {weatherTemp} {currentTemperatureUnit}
      </p>
      <img className="weather_image" alt={type} src={weatherOptionUrl} />
    </section>
  );
};
export default WeatherCard;
