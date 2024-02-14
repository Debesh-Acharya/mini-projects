const options ={
    method: 'GET',
    headers:{
        'X-RapidAPI-Key': '794870028amsh58725504353969bp1f9754jsnf38203af0982',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}; 
const getWeather =(city)=>{

cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then((response)=>{
    console.log(response)
    // cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    feels_like.innerHTML=response.feels_like
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML=response.min_temp
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    wind_degrees.innerHTML=response.wind_degrees
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed

})
.catch(err =>console.error(err));
}		
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");




