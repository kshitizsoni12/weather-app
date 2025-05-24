const apikey = "a6265b4af4655be358d62685ed864ce3";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let errormsg = document.querySelector(".error");
btn.addEventListener("click",(event)=>{
    checkweather(inp.value);

})

async function checkweather(city){
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);

    
    if(response.status == "404"){
        errormsg.style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        errormsg.style.display = "none";
        document.querySelector(".weather").style.display = "block";

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        let weatheris = data.weather[0].main;
        changeweatherimg(weatheris);
    }

    
};

function changeweatherimg(weather){
    if(weather == "Clouds"){
        document.querySelector(".weather_icon").src = "clouds.png";
    }else if(weather == "Clear"){
        document.querySelector(".weather_icon").src = "clear.png";
    }else if(weather == "Drizzle"){
        document.querySelector(".weather_icon").src = "drizzle.png";
    }else if(weather == "Mist"){
        document.querySelector(".weather_icon").src = "mist.png";
    }else if(weather == "Rain"){
        document.querySelector(".weather_icon").src = "rain.png";
    }else if(weather == "Snow"){
        document.querySelector(".weather_icon").src = "snow.png";
    }


}