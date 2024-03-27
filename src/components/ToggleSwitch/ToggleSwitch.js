import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import {CurrentTemperatureUnitContext} from '../../contexts/CurrentTempatureUnitContext';

const ToggleSwitch = () => {
  //const [currentTempatureUnit, handleToggleChange] = useState("C");
//   const handleChange = (e) => {
//     if (currentTempatureUnit === "C") handleToggleChange("F");
//     if (currentTempatureUnit === "F") handleToggleChange("C");
//   };
//   console.log(currentTempatureUnit);
const {currentTempatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext)
  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" onChange={handleToggleSwitchChange} />
      <span
        className={
          currentTempatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p className={`switch__temp-F ${currentTempatureUnit === 'F' && "switch__active"}`}>F</p>
      <p className={`switch__temp-C ${currentTempatureUnit === 'C' && "switch__active"}`}>C</p>
    </label>
  );
};
export default ToggleSwitch;
