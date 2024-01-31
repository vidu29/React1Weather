import axios from "axios";
import React, { useState } from 'react';
function App() {
const [deg, setdeg] = useState("degree")
const [city, setcity] = useState("city")
const [weather, setweather] = useState("weather")
const [enteredvalue, sententeredvalue] = useState("")
function handleInput(event) {
  console.log(event.target.value)
  sententeredvalue(event.target.value);
}
function getData() {
  var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=a23ef0dd01f08cd935980037f55a3099`)
  weather.then(function (dalta) {
    console.log(dalta.data.main.temp);
    setdeg(dalta.data.main.temp);
    setcity(dalta.data.name);
    setweather(dalta.data.weather[0].main);
  })
}
return (
  <div className="flex flex-row justify-center h-[100vh] items-center" >
    <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md shadow">
      <h2 className="font-medium">Hey! ⛅</h2>
      <p className="text-xs">Do you want to know the weather Report :)</p>
      <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" />
      <br />
      <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report ⚡</button>
      <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {weather}</p>
    </div>
  </div>)
}

export default App