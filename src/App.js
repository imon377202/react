import './App.css'
import React from 'react'
import image from './Images/g.jpg'
import DisplayWeather from './Weather/Weather'
import { useState } from 'react'
function App() {

  const [weather, setWeather] = useState([]);
  const city = (name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f006978badfda0c49fedf639c9be684a&units=metric`
    fetch(url)
      .then(res => res.json())
      .then(data => setWeather(data))
  }
  console.log(weather);
  const styleBackground = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment:'fixed',
    height:'695px'
  }
  return (
    <div className='mainContainer' style={styleBackground}>
      <div className='info'>
          <input id='input' type="text"  />
      <button onClick={() => {
        const value = document.getElementById('input').value
          if ( value ==="")
          {
             document.getElementById('error-message').innerText = 'Please Enter City Name'
            document.getElementById('error-message').style.display = 'block'
             document.getElementById('weather').style.display='none'
          }
          // // else if (value === "" ) {
          // //   document.getElementById('error-message').style.display = 'none'
          // //   document.getElementById('weather').style.display = 'block'
              
          //   }
            else {
            city(value)
            document.getElementById('error-message').style.display = 'none'
                  document.getElementById('weather').style.display='block'
          }
      }
      }>Search</button>
         <p id='error-message'></p>
        <div id="weather">

      <DisplayWeather
        name={weather.name}
        temp={weather?.main?.temp}
        main={weather?.weather?.[0].main}
        feels_like={weather?.main?.feels_like}
        
        ></DisplayWeather>
        </div>
      </div>
    
    </div>
  )
}
export default App;