import React from "react";
import './Forecast.css'; // Ensure to import the CSS file

const Forecast = ({ title, data }) => {
  return (
    <div className="forecast-container">
      <div className="flex items-center justify-start mt-6">
        <p className="forecast-title">{title}</p>
      </div>
      <hr className="forecast-divider" />

      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="forecast-item"
          >
            <p className="forecast-item-title">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="forecast-icon" />
            <p className="forecast-temp">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;