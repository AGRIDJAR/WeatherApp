
// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {

//     const inputRef = useRef();

//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9/5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             console.log(data);
//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date) => {
//         let hours = date.getHours();
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const seconds = date.getSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return `${hours}:${minutes}:${seconds} ${ampm}`;
//     };

//     const formatDate = (date) => {
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return date.toLocaleDateString(undefined, options);
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>
//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='date'>{formatDate(currentTime)}</p>
//                 <p className='time'>{formatTime(currentTime)}</p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//         </div>
//     );
// };

// export default Weather;

// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {

//     const inputRef = useRef();

//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }
            

//             console.log(data);
//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return `${hours}:${minutes}:${seconds} ${ampm}`;
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };


//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>
//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>{formatTime(currentTime, weatherData.timezoneOffset)}</p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//         </div>
//     );
// };

// export default Weather;

// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {

//     const inputRef = useRef();

//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             console.log(data);
//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return `${hours}:${minutes}:${seconds} ${ampm}`;
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>
//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>{formatTime(currentTime, weatherData.timezoneOffset)}</p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//         </div>
//     );
// };

// export default Weather;

// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {

//     const inputRef = useRef();

//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             console.log(data);
//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return { hours, minutes, seconds, ampm };
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>
//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>
//                     <span className='time-hours'>{formatTime(currentTime, weatherData.timezoneOffset).hours}</span>:
//                     <span className='time-minutes'>{formatTime(currentTime, weatherData.timezoneOffset).minutes}</span>:
//                     <span className='time-seconds'>{formatTime(currentTime, weatherData.timezoneOffset).seconds}</span>
//                     <span className='time-ampm'> {formatTime(currentTime, weatherData.timezoneOffset).ampm}</span>
//                 </p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//         </div>
//     );
// };

// export default Weather;

// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {
//     const inputRef = useRef();
//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset,
//                 description: data.weather[0].description // Add description to the state
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return { hours, minutes, seconds, ampm };
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
                
//                 <img className='search_icon2'  src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//             </div>
           

//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='description'>{weatherData.description}</p> {/* Display the description */}
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>
//                     <span className='time-hours'>{formatTime(currentTime, weatherData.timezoneOffset).hours}</span>:
//                     <span className='time-minutes'>{formatTime(currentTime, weatherData.timezoneOffset).minutes}</span>:
//                     <span className='time-seconds'>{formatTime(currentTime, weatherData.timezoneOffset).seconds}</span>
//                     <span className='time-ampm'> {formatTime(currentTime, weatherData.timezoneOffset).ampm}</span>
//                 </p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//             <div className='news'>
// <button className='btn'><h3><a href='https://www.foxweather.com/live'>Check Your local Weather News</a></h3>
// </button>
// </div>
//         </div>
//     );
// };

// export default Weather;

// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import voice_icon from '../assets/voice.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {
//     const inputRef = useRef();
//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [recognizing, setRecognizing] = useState(false);

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset,
//                 description: data.weather[0].description // Add description to the state
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return { hours, minutes, seconds, ampm };
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };

//     const startVoiceRecognition = () => {
//         if (!('webkitSpeechRecognition' in window)) {
//             alert('Your browser does not support voice recognition.');
//             return;
//         }

//         const recognition = new window.webkitSpeechRecognition();
//         recognition.lang = 'en-US';
//         recognition.interimResults = false;
//         recognition.maxAlternatives = 1;

//         recognition.onstart = () => setRecognizing(true);
//         recognition.onend = () => setRecognizing(false);
//         recognition.onerror = (event) => {
//             console.error('Recognition error:', event);
//             setRecognizing(false);
//         };

//         recognition.onresult = (event) => {
//             const city = event.results[0][0].transcript;
//             inputRef.current.value = city;
//             search(city);
//         };

//         recognition.start();
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img className='search_icon' src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//                 <img className='voice_icon' src={voice_icon} alt="voice search" onClick={startVoiceRecognition} />
//             </div>

//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='description'>{weatherData.description}</p> {/* Display the description */}
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>
//                     <span className='time-hours'>{formatTime(currentTime, weatherData.timezoneOffset).hours}</span>:
//                     <span className='time-minutes'>{formatTime(currentTime, weatherData.timezoneOffset).minutes}</span>:
//                     <span className='time-seconds'>{formatTime(currentTime, weatherData.timezoneOffset).seconds}</span>
//                     <span className='time-ampm'> {formatTime(currentTime, weatherData.timezoneOffset).ampm}</span>
//                 </p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//             <div className='news'>
//                 <button className='btn'><h3><a href='https://www.foxweather.com/live'>Check Your local Weather News</a></h3></button>
//             </div>
//         </div>
//     );
// };

// export default Weather;



// import React, { useEffect, useRef, useState } from 'react';
// import './Weather.css';
// import search_icon from '../assets/search.png';
// import voice_icon from '../assets/voice.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';

// const Weather = () => {
//     const inputRef = useRef();
//     const [weatherData, setWeatherData] = useState(false);
//     const [currentTime, setCurrentTime] = useState(new Date());
//     const [recognizing, setRecognizing] = useState(false);

//     const allIcons = {
//         "01d": clear_icon,
//         "01n": clear_icon,
//         "02d": clear_icon,
//         "02n": cloud_icon,
//         "03d": cloud_icon,
//         "03n": cloud_icon,
//         "04d": drizzle_icon,
//         "04n": drizzle_icon,
//         "09d": rain_icon,
//         "09n": rain_icon,
//         "10d": rain_icon,
//         "10n": rain_icon,
//         "13d": snow_icon,
//         "13n": snow_icon,
//     };

//     const convertToFahrenheit = (celsius) => {
//         return Math.floor((celsius * 9 / 5) + 32);
//     };

//     const search = async (city) => {
//         if (city === "") {
//             alert("Enter city name");
//             return;
//         }
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

//             const response = await fetch(url);
//             const data = await response.json();

//             if (!response.ok) {
//                 alert(data.message);
//                 return;
//             }

//             const icon = allIcons[data.weather[0].icon] || clear_icon;
//             const timezoneOffset = data.timezone; // in seconds
//             setWeatherData({
//                 humidity: data.main.humidity,
//                 windspeed: data.wind.speed,
//                 temperatureC: Math.floor(data.main.temp),
//                 temperatureF: convertToFahrenheit(data.main.temp),
//                 location: data.name,
//                 icon: icon,
//                 timezoneOffset: timezoneOffset,
//                 description: data.weather[0].description // Add description to the state
//             });
//         } catch (error) {
//             setWeatherData(false);
//             console.error("Error in fetching weather data");
//         }
//     };

//     useEffect(() => {
//         search("Texas");

//         const timer = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, []);

//     const formatTime = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         let hours = localDate.getUTCHours();
//         const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
//         const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         hours = hours % 12;
//         hours = hours ? hours : 12; // the hour '0' should be '12'
//         return { hours, minutes, seconds, ampm };
//     };

//     const formatDate = (date, offset) => {
//         const localDate = new Date(date.getTime() + offset * 1000);
//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//         return localDate.toLocaleDateString(undefined, options);
//     };

//     const startVoiceRecognition = () => {
//         if (!('webkitSpeechRecognition' in window)) {
//             alert('Your browser does not support voice recognition.');
//             return;
//         }

//         const recognition = new window.webkitSpeechRecognition();
//         recognition.lang = 'en-US';
//         recognition.interimResults = false;
//         recognition.maxAlternatives = 1;

//         recognition.onstart = () => setRecognizing(true);
//         recognition.onend = () => setRecognizing(false);
//         recognition.onerror = (event) => {
//             console.error('Recognition error:', event);
//             setRecognizing(false);
//         };

//         recognition.onresult = (event) => {
//             const city = event.results[0][0].transcript;
//             inputRef.current.value = city;
//             search(city);
//         };

//         recognition.start();
//     };

//     return (
//         <div className='weather'>
//             <div className='search-bar'>
//                 <input ref={inputRef} type='text' placeholder='search' />
//                 <img className='search_icon' src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
//                 <img className='voice_icon' src={voice_icon} alt="voice search" onClick={startVoiceRecognition} />
//             </div>

//             {weatherData ? <>
//                 <img src={weatherData.icon} alt="" className='weather-icon' />
//                 <p className='temperature'>{weatherData.temperatureF}°F</p>
//                 <p className='location'>{weatherData.location}</p>
//                 <p className='description'>{weatherData.description}</p> {/* Display the description */}
//                 <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
//                 <p className='time'>
//                     <span className='time-hours'>{formatTime(currentTime, weatherData.timezoneOffset).hours}</span>:
//                     <span className='time-minutes'>{formatTime(currentTime, weatherData.timezoneOffset).minutes}</span>:
//                     <span className='time-seconds'>{formatTime(currentTime, weatherData.timezoneOffset).seconds}</span>
//                     <span className='time-ampm'> {formatTime(currentTime, weatherData.timezoneOffset).ampm}</span>
//                 </p>
//                 <div className="weather-data">
//                     <div className="col">
//                         <img src={humidity_icon} alt='' />
//                         <div>
//                             <p>{weatherData.humidity} %</p>
//                             <span>Humidity</span>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <img src={wind_icon} alt='' />
//                         <div>
//                             <p>{weatherData.windspeed} km/hrs</p>
//                             <span>Wind Speed</span>
//                         </div>
//                     </div>
//                 </div>
//             </> : <></>}
//             <div className='news'>
//                 <button className='btn'><h3><a href='https://www.foxweather.com/live'>Check Your local Weather News</a></h3></button>
//             </div>
//         </div>
//     );
// };

// export default Weather;




import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import voice_icon from '../assets/voice.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

import clear_bg from '../assets/clear_bg.jpg.gif';
import cloud_bg from '../assets/cloud_bg.jpg.gif';
import drizzle_bg from '../assets/drizzle_bg.jpg.gif';
import rain_bg from '../assets/rain_bg.jpg.gif';
import snow_bg from '../assets/snow_bg.jpg.gif';

const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [recognizing, setRecognizing] = useState(false);
    const [recognition, setRecognition] = useState(null);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": clear_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };

    const allBackgrounds = {
        "01d": clear_bg,
        "01n": clear_bg,
        "02d": clear_bg,
        "02n": cloud_bg,
        "03d": cloud_bg,
        "03n": cloud_bg,
        "04d": drizzle_bg,
        "04n": drizzle_bg,
        "09d": rain_bg,
        "09n": rain_bg,
        "10d": rain_bg,
        "10n": rain_bg,
        "13d": snow_bg,
        "13n": snow_bg,
    };
    const [background, setBackground] = useState(clear_bg);

    const convertToFahrenheit = (celsius) => {
        return Math.floor((celsius * 9 / 5) + 32);
    };

    const search = async (city) => {
        if (city === "") {
            alert("Enter city name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clear_icon;
            const timezoneOffset = data.timezone; // in seconds
            setWeatherData({
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                temperatureC: Math.floor(data.main.temp),
                temperatureF: convertToFahrenheit(data.main.temp),
                location: data.name,
                icon: icon,
                timezoneOffset: timezoneOffset,
                description: data.weather[0].description // Add description to the state
            });
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data");
        }
    };

    useEffect(() => {
        search("Texas");

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date, offset) => {
        const localDate = new Date(date.getTime() + offset * 1000);
        let hours = localDate.getUTCHours();
        const minutes = localDate.getUTCMinutes().toString().padStart(2, '0');
        const seconds = localDate.getUTCSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return { hours, minutes, seconds, ampm };
    };

    const formatDate = (date, offset) => {
        const localDate = new Date(date.getTime() + offset * 1000);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return localDate.toLocaleDateString(undefined, options);
    };

    const startVoiceRecognition = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support voice recognition.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => setRecognizing(true);
        recognition.onend = () => setRecognizing(false);
        recognition.onerror = (event) => {
            console.error('Recognition error:', event);
            setRecognizing(false);
        };

        recognition.onresult = (event) => {
            const city = event.results[0][0].transcript;
            inputRef.current.value = city;
            search(city);
        };

        setRecognition(recognition);
        recognition.start();
    };

    const listenForCommand = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support voice recognition.');
            return;
        }

        const commandRecognition = new window.webkitSpeechRecognition();
        commandRecognition.lang = 'en-US';
        commandRecognition.interimResults = false;
        commandRecognition.maxAlternatives = 1;

        commandRecognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            if (command.includes("start recording")) {
                startVoiceRecognition();
            }
        };

        commandRecognition.start();
    };

    useEffect(() => {
        listenForCommand();
    }, []);

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input ref={inputRef} type='text' placeholder='search' />
                <img className='search_icon' src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
                <img className='voice_icon' src={voice_icon} alt="voice search" onClick={startVoiceRecognition} />
                
            </div>

            {weatherData ? <>
                <img src={weatherData.icon} alt="" className='weather-icon' />
                <p className='temperature'>{weatherData.temperatureF}°F</p>
                <p className='location'>{weatherData.location}</p>
                <p className='description'>{weatherData.description}</p> {/* Display the description */}
                <p className='date'>{formatDate(currentTime, weatherData.timezoneOffset)}</p>
                <p className='time'>
                    <span className='time-hours'>{formatTime(currentTime, weatherData.timezoneOffset).hours}</span>:
                    <span className='time-minutes'>{formatTime(currentTime, weatherData.timezoneOffset).minutes}</span>:
                    <span className='time-seconds'>{formatTime(currentTime, weatherData.timezoneOffset).seconds}</span>
                    <span className='time-ampm'> {formatTime(currentTime, weatherData.timezoneOffset).ampm}</span>
                </p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt='' />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt='' />
                        <div>
                            <p>{weatherData.windspeed} km/hrs</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </> : <></>}
            <div className='news'>
                <button className='btn'><h3><a href='https://www.foxweather.com/live'>Check Your local Weather News</a></h3></button>
            </div>
        </div>
    );
};

export default Weather;

//npm run dev
