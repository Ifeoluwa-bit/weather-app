import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "c220dab0782a9943f1038efb84eff35c";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    icon: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json() ;
    if (city && country) {
      this.setState({ 
        temperature:data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        error: ""
    })
  }else{
    this.setState({
      error: "Please fill out the input fields..."
    })
  }
}
  render() {
    return(
      <div className="col-xs-5 title-container">
        <Titles />
        <div className="col-xs-7 form-container">
        <Form getWeather={this.getWeather}/>
        <div className="weather">
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          icon={this.state.icon}
          description={this.state.description}
          error={this.state.error}
         /></div>
         </div>
      </div>
    );
  }
};

export default App;