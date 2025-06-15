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

export const weatherOptions = [
  {
    url: clearDay.default,
    day: true,
    type: "clear",
  },
  {
    url: cloudyDay.default,
    day: true,
    type: "cloudy",
  },
  { url: fogDay, day: true, type: "fog" },
  { url: rainDay, day: true, type: "rain" },
  { url: snowDay, day: true, type: "snow" },
  { url: stormDay, day: true, type: "storm" },
  {
    url: clearNight.default,
    day: false,
    type: "clear",
  },
  {
    url: cloudyNight.default,
    day: false,
    type: "cloudy",
  },
  { url: fogNight, day: false, type: "fog" },
  {
    url: rainNight.default,
    day: false,
    type: "rain",
  },
  {
    url: snowNight.default,
    day: false,
    type: "snow",
  },
  {
    url: snowNight.default,
    day: false,
    type: "storm",
  },
];
