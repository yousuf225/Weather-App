const apiKey = "d6861c0d9f2983db9fa8ae932df31cd8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const input = document.getElementById("txt-EL")

async function Checkweather(newcity){
    
    const response = await fetch(apiUrl+ newcity + `&appid=${apiKey}`)
    
    if(response.status== 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        

    } 
    else{
    
        let data = await response.json();
        console.log(data)
        let sunrise = data.sys.sunrise
        console.log(sunrise*1000)

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}℃`
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`


    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "rainy.png"
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "snow.png"
    } 
    document.querySelector(".error").style.display = "none"
    document.querySelector(".weather").style.display = "block"
}
}

searchBtn.addEventListener("click", ()=>{
    Checkweather(searchBox.value)
    searchBox.value = "";
})
input.addEventListener('keyup',(e)=>{
    if (e.keyCode==13) {
        Checkweather(searchBox.value)
    searchBox.value = "";
    }
})







