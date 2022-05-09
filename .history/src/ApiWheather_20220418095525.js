import React from 'react';
import axios from 'axios'
import './App.css';
import { useState,useEffect } from 'react';

const ApiWheather = () => {

     const [weather,setweather]= useState({})
     const [temp,setTemperature]= useState(0);
     const [isDc, setIsDc]= useState(true)
    const success = pos =>{
       
        const latitude= pos.coords.latitude
        const longitude=pos.coords.longitude

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e299806777d5a118635ab0fcf15f15cb`)
       .then(res =>{
            setweather(res.data);
            setTemperature(res.data.temp);
       });

       
    }
   
    
    

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success);
},[])  
    console.log(weather)

    const convertTemperature=()=>{
          if(isDc){
              setTemperature((temp*(9/5))+32);
              setIsDc(false);
          } else{
              setTemperature((temp/(9/5))-32);
              setIsDc(true);
          }
    }

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
    <h3><span>Temperatura:</span> <span>{temp}</span><span>{isDc ? '°C' : 'ºF'}</span> </h3>
   
    </div>
    </div>
    <button onClick={convertTemperature}>Converter to {isDc ? 'Fahrenheit': 'centigrados'} </button>
    </div>
)
 
}



export default ApiWheather;