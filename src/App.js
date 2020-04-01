import React from 'react';
import a from './images/weather.jpg';
import './App.css';
import Weather from './components/Weather.js';
import Form from './components/Form.js';


const API_KEY ="9882fbb7c3586cdcea57be629af28c82";

class App extends React.Component{

state={

  temperature: undefined,

  city: undefined,

  country: undefined,

  humidity: undefined,

  description: undefined,

  error: undefined
}

getWeather = async (e) => {
  e.preventDefault();
  const city =e.target.elements.city.value;
   const country =e.target.elements.country.value;


      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`); 

      const data = await api_call.json();

if(city && country)
  {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: " "
      })
  }
else
  {
      this.setState({
         temperature: undefined,

         city: undefined,

         country: undefined,

         humidity: undefined,

         description: undefined,

        error: "Please enter the values."
      })
  }
}

  render(){
    return (
    <div className="App">
    <div className="App1">
     <center>
        <img src={a} className="App-logo" alt="logo" /> </center>
         <b> Weather Master</b><br/>
         </div>
      <header className="App-header">
      
          <Form getWeather={this.getWeather} />

             <Weather 
             temperature= {this.state.temperature}
             city = {this.state.city}
             country= {this.state.country}
             humidity= {this.state.humidity}
             description= {this.state.description}
             error= {this.state.error}
             />
      </header>

    </div>
  );
}
} 

export default App;
