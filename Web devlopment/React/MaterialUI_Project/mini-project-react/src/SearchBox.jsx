import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  let API_KEY = "bc50525edfff3dea6569e5d01bf49d5b";

  let Weather_API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();

      let weatherResponse = await fetch(
        `${Weather_API_URL}?lat=${jsonResponse[0].lat}&lon=${jsonResponse[0].lon}&appid=${API_KEY}&units=metric`
      );

      let jsonWeatherResponse = await weatherResponse.json();
      // console.log(jsonWeatherResponse);
      let mainData = await jsonWeatherResponse.main;

      let result = {
        city: city,
        temp: mainData.temp,
        tempMin: mainData.temp_min,
        tempMax: mainData.temp_max,
        humidity: mainData.humidity,
        feelsLike: mainData.feels_like,
        weather: jsonWeatherResponse.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // consol
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      <h3>Seacrh For the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
      </form>

      {error && <h3 style={{ color: "Red" }}>No such place exist</h3>}
    </div>
  );
}
