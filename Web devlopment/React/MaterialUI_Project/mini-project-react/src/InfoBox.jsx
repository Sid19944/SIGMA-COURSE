import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuJTIwcmlzZXxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0fGVufDB8fDB8fHww";

  return (
    <div className="infoBox">
      <h3>Weather Report</h3>
      <div className="cardInfo">
        <Card style={{ width: "50vh", height: "60vh" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} &nbsp;&nbsp;{info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 20
                ? <SunnyIcon/>
                : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" component={"span"}>
              <p>Temperature = {info.temp}</p>
              <p>FeelsLike= {info.feelsLike}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temperature = {info.tempMax}</p>
              <p>Weather = {info.weather}</p>
              <p>Humidity = {info.humidity}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
