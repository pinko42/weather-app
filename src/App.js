import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [resData, setResData] = useState(true);
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("x");
  const [wind, setWind] = useState("");
  const updateInput = (text) => {
    setInput(text);
  };
  const website = "api.openweathermap.org/data/2.5/weather";
  const apiKey = "b7ed116b4ea17b35e683037702056cd8";
  const getData = () => {
    axios.get(`http://${website}?q=${input}&appid=${apiKey}`).then((res) => {
      setResData(res.data);
      setTemperature(`${Math.round(res.data.main.temp - 273, 15)}°`);
      setWeather(res.data.weather[0].main);
      setWind(`${res.data.wind.speed}km/h`);
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <Navbar />
      <Card
        update={updateInput}
        getData={getData}
        resData={resData}
        temperature={temperature}
        weather={weather}
        wind={wind}
      />
    </div>
  );
}

export default App;
