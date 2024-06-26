//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
import processServerResponse from "./serverResponse";
const longitude = 44.34;
const latitude = 10.99;

const APIkey = "64149002cb84a3241e637e8cce216f4a";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey} 
    `
  ).then(processServerResponse);
  return weatherApi;
};
export const parseWeatherData = (data) => {
  const main = data.main;
  const location = data.name;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
    location,
  };
  return weather;
};
//weather.temperature.F = `${Math.round(data.main.temp)}°F`;
//weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;
