import React from "react";

const Form = props => (
    <form onSubmit={ props.getWeather}>
        <input type="text" name="city" placeholder="Search for a City" autoFocus/>
        <input type="text" name="country" placeholder="Choose a Country" autoFocuse />
        <button className="btn">Get Weather</button>
        <span className="msg"></span>
    </form>
);
export default Form;