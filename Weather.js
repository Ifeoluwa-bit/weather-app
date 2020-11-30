import React from "react";

const Weather = props => (
   <div className="ajax-section">
   <br/>
        <div className="cities">
        { 
        props.city && props.country && <p className="weather__key">Location: 
        <span className="city-value">{ props.city }, { props.country }</span>
        </p>
        }
        <hr/>
        {
        props.city && props.country && <p className="weather__key">Temperature: 
        <span className="city-value">{ props.temperature }</span>
        </p>
        }
        <hr/>
        {
        props.city && props.country && <p className="weather__key">Humidity: 
        <span className="city-value">{ props.humidity }</span>
        </p>
        }
        <hr />
        { 
        props.city && props.country && <p className="weather__key">Pressure: 
        <span className="city-value">{ props.pressure }</span>
        </p>
        }
        <hr />
        { 
        props.city && props.country && <img className="city-icon" src={`http://openweathermap.org/img/w/${props.icon}.png`
        } 
        alt="weather icon"/> }
        { 
        props.city && props.country && <p className="weather__key">Conditions: 
        <span className="city-value">{ props.description }</span>
        </p>
        }
        {
        props.error && <p className="weather-error">{ props.error }</p>
        }
        </div>
    </div>
);

export default Weather;