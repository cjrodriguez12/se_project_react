import "../Main/Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, initialClothes }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F" && temp >= 86) {
      return "hot";
    } else if (currentTemperatureUnit === "F" && temp >= 66 && temp <= 85) {
      return "warm";
    } else if (currentTemperatureUnit === "F" && temp <= 65) {
      return "cold";
    } else if (currentTemperatureUnit === "C" && temp >= 30) {
      return "hot";
    } else if (currentTemperatureUnit === "C" && temp >= 19 && temp <= 30) {
      return "warm";
    } else if (currentTemperatureUnit === "C" && temp <= 19) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = initialClothes.filter((item) => {
    return item.weather.toLocaleLowerCase() === weatherType;
  });
  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <section className="card_section" id="card_section">
        <p className="weather_title">
          Today is {temp} {currentTemperatureUnit} and it is {weatherType} / You
          may want to wear:
        </p>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
