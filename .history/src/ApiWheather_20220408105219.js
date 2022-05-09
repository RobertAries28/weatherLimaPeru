import React from 'react';
import axios from 'axios'
import './App.css';
import { useState,useEffect } from 'react';

const ApiWheather = () => {

     const [weather,setweather]= useState({})

    const success = pos =>{
       
        const latitude= pos.coords.latitude
        const longitude=pos.coords.longitude

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e299806777d5a118635ab0fcf15f15cb`)
       .then(res => setweather(res.data));


    }

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success);
},[])  
    console.log(weather)
return(
    <div className='weather'>
    <h1>Weather app</h1>

    <div className='elements'>
 <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt=""/>
 <h3>Clouds: {weather.clouds?.all}% </h3>
    <h3>Country: {weather.sys?.country}</h3>
    <h3>Wind Speed: {weather.wind?.speed}m/s </h3>
    <h3>Ciudad: {weather.name}</h3>
    <h3>Temperatura: {weather.main?.temp}°C</h3>
    <button>Converter a Fahrenheit</button>
    </div>

    </div>
)
 
}



export default ApiWheather;