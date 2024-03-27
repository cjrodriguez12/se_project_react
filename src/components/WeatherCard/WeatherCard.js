import { weatherOptions } from "../../utils/constants";
import React, { useContext, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";


const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp} {currentTemperatureUnit}
      </div>
      <div>
        <img alt={type} src={imageSrcUrl} className="weather_image" />
      </div>
    </section>
  );
};
export default WeatherCard;
