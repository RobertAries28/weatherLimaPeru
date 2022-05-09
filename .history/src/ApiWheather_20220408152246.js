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
    const elemento=weather.main?.temp
    const [dato,setDato]= useState({elemento})
    

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success);
},[])  
    console.log(weather)
    console.log(elemento)
return(
    <div className='weather'>
    <h1>Weather app</h1>

    <div className='elements'>
 <div><img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt=""/></div>
 <div>
 <h3><span>Clouds:</span> {weather.clouds?.all}% </h3>
    <h3><span>Country:</span> {weather.sys?.country}</h3>
    <h3><span>Wind Speed:</span> {weather.wind?.speed}m/s </h3>
    <h3><span>Ciudad:</span> {weather.name}</h3>
    <h3><span>Temperatura:</span> {dato}°C</h3>
   
    </div>
    </div>
    <button onClick={()=>setDato(dato*5) }>Converter a Fahrenheit</button>
    </div>
)
 
}



export default ApiWheather;