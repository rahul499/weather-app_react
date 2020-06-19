import React, {useState} from "react"
import axios from "axios";

import Context from "../Context"
import Header from "./Basic/Header"
import Footer from "./Basic/Footer"
import Content from "./Basic/Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Error from "./Error"
import DateTime from "./DateTime"
import MainLine from "./MainLine"

const Main = () => {
   
const API_KEY ="9882fbb7c3586cdcea57be629af28c82";

const [weather, setWeather] = useState(null)
 const [city, setCity] = useState(null) 
 const [error, setError] = useState(null)

  const api_call = async e => {
    e.preventDefault()
    const location = e.target.elements.city.value
    if (!location) {
      return setError("Please enter the name of the city"), setWeather(null)
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = axios.get(url)
    const response = await request
    setError(null)
    setWeather(response.data.main)
     setCity(response.data.name)
  }


  return (
    <div className="main">
      <Header/>
      <Content>
        <DateTime />
          { weather === null && <MainLine /> }
        <Context.Provider value={{api_call, weather, city}}>
          <WeatherSearch/>

           { error !== null && <p>{<Error error={error}/>}</p> }
          { weather !== null && <WeatherData/> }
        </Context.Provider>
        <Footer/>
      </Content>
    </div>
  )
}

export default Main
