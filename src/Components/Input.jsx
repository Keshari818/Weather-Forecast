import React from "react";
import { useWeather } from "../Context/Weather";
const Input = ({ value, onChange }) => {
  const weather = useWeather();
  return (
    <input
      className="input-field"
      placeholder="Search Here"
      value={value !== null ? value : "weather.searchCity"}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
