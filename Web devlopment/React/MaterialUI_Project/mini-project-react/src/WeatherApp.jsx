import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 23,
    temp: 33,
    tempMin: 30.34,
    tempMax: 40,
    weather: "haze",
    humidity: 40,
  });

    
  let updateInfo = (res) => {
    setWeatherInfo(res);
  };
  return (
    <div>
      <h2>Weather app by GOD</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
