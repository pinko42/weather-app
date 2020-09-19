import React from "react";
import WeatherPic from "./weather.png";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card-container">
        <div>
          <input
            placeholder="city"
            onChange={(event) => {
              props.update(event.target.value);
            }}
          />
          <button onClick={() => props.getData()}>search</button>
        </div>
        <img className="picture" src={WeatherPic} alt="weather pic" />
        {props.err? <div>{props.err}</div> : <><div>
          
          <div style={{ fontSize: "30px" }}>{props.resData.name}</div>
        </div>
        <div className="data">
          <div>
            temperature<div>{props.temperature}</div>
          </div>

          <div>
            Weather<div>{props.weather}</div>
          </div>
          <div>
            wind<div>{props.wind}</div>
          </div>
        </div></> }
      </div>
    </div>
  );
};

export default Card;
