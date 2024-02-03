import { weatherOptions } from "../../utils/constants";
const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <div>
        <img alt={type} src={imageSrcUrl} className="weather_image" />
      </div>
    </section>
  );
};
export default WeatherCard;
