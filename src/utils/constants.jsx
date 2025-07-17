import clearDay from "../images/day/clear.svg";
import clearNight from "../images/day/cloudy.svg";
import cloudyDay from "../images/day/cloudy.svg";
import cloudyNight from "../images/night/cloudy.svg";
import fogDay from "../images/day/fog.svg";
import fogNight from "../images/night/fog.svg";
import rainDay from "../images/day/rain.svg";
import rainNight from "../images/night/rain.svg";
import snowDay from "../images/day/snow.svg";
import snowNight from "../images/night/snow.svg";
import stormDay from "../images/day/storm.svg";
import stormNight from "../images/night/storm.svg";
export const baseUrl = "http://localhost:3000";
export const headers = { "Content-Type": "application/json" };
export const weatherOptions = [
  {
    url: clearDay,
    day: true,
    type: "clear",
  },
  {
    url: cloudyDay,
    day: true,
    type: "cloudy",
  },
  { url: fogDay, day: true, type: "fog" },
  { url: rainDay, day: true, type: "rain" },
  { url: snowDay, day: true, type: "snow" },
  { url: stormDay, day: true, type: "storm" },
  {
    url: clearNight,
    day: false,
    type: "clear",
  },
  {
    url: cloudyNight,
    day: false,
    type: "cloudy",
  },
  { url: fogNight, day: false, type: "fog" },
  {
    url: rainNight,
    day: false,
    type: "rain",
  },
  {
    url: snowNight,
    day: false,
    type: "snow",
  },
  {
    url: stormNight,
    day: false,
    type: "storm",
  },
];
