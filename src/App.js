import React, { Component } from 'react';
import logo from './logo.svg';
import weather from './weather.jpg';
import axios from 'axios';
import './App.css';
const API_KEY="82776a8e05bf3a947db4281ff3c3f12a";
class App extends Component{

state={
	 temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
}


searchWeather = async (e)=>{
e.preventDefault();


    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
	const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(data){
    	if(city && country){
		 this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
	}
	else{
		 this.setState({
       temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
      });
	}
    }
    else{
    	 this.setState({
        temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
      });
    }
	
}

	render(){
		return(
			<div className="container">
			<div className="row">
			<div className="col-sm-12">
				<div className="row">
				<div className="col-sm-1">
				
				</div>
				<div className="col-sm-4 title-container ">
				<div>
					<h2 className="weatherfinder"> Weather finder</h2>
					<p className="weatherfinder">find out temperature <br /> weather conditions and more....</p>
				</div></div>
				<div className="col-sm-6 card">
				<form onSubmit={this.searchWeather}>
				<input type="text" className="city" placeholder="enter city name" name="city" />
				<input type="text"  className="country"  placeholder="enter country name" name="country"/>
				<button className="btn btn-primary"  type="submit">Search</button>
				</form>

					<div className="weather__info">
					 {	
					 	this.state.city && this.state.country && <p className="weather__key"> Location: 
					 		<span className="weather__value"> { this.state.city }, { this.state.country }</span>
					 	</p> 
					 }
					 { 	
					 	this.state.temperature && <p className="weather__key"> Temperature: 
					 		<span className="weather__value"> { this.state.temperature }	</span>
					 	</p> 
					 }
					 { 	
					 	this.state.humidity && <p className="weather__key"> Humidity: 
					 		<span className="weather__value"> { this.state.humidity } </span>
					 	</p> 
					 }
					 { 	
					 	this.state.description && <p className="weather__key"> Conditions: 
					 		<span className="weather__value"> { this.state.description } </span>
					 </p> 
					 }
					 { 
					 	this.state.error && <p className="weather__error">{ this.state.error }</p>  
					 }
					</div>
				</div>

				<div className="col-sm-1">
				
				</div>
				</div>
			</div>
			</div>
			</div>
		);
	}

}

export default App;
