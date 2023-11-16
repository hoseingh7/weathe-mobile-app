import React from "react";
import dayjs from "dayjs";

import { UseWeatherAppContext } from "../../Context/Context";
const LeftComponents = () => {
  const { state } = UseWeatherAppContext();
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const {
    state: { city, current },
  } = UseWeatherAppContext();

  if (!current) return <div>Loading...</div>;
  //console.log('current',city)
  const weekdayIndex = dayjs.unix(current.dt).day();

  let backgroundImage;
  switch (current.weather[0].main) {
    case "Clear":
      backgroundImage = "../../Assets/wallpaper.jpg";
      break;
    case "Clouds":
      backgroundImage = "background2.jpg";
      break;
    case "Rain":
      backgroundImage = "background3.jpg";
      break;
    case "Snow":
      backgroundImage = "background4.jpg";
      break;
    default:
      backgroundImage = "defaultBackground.jpg";
  }
  const backgroundStyle = {
    backgroundImage: `url(images/${backgroundImage})`,
  };
  return (
    <>
      <div
        className="leftWrap"
        style={backgroundStyle}>
        <div className="dateWrap">
          <h2>{WEEKDAYS[weekdayIndex]}</h2>
          <span className="dateDay">
            {dayjs.unix(current.dt).format("DD MMM YYYY")}
          </span>
          <span className="locationName">
            {city.city} - {city.admin_name} - {city.country}
          </span>
        </div>
        <div className="weatherContainer">
          <img
            className="weatherIcon"
            alt="myit"
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          />
          <h1 className="weatherTemp">{Math.round(current.temp.max)}°C</h1>
          <h3 className="weatherDesc">{current.weather[0].main}</h3>
        </div>
      </div>
    </>
  );
};

export default LeftComponents;
