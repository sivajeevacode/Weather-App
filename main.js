const apikey="2a9829917f011be8c2bafaf677e81edf";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var input=document.getElementById("input");
var search=document.getElementById("btn");
var icon=document.querySelector(".icon");

async function check(city){
    var response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await response.json();
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
   
    if(data.weather[0].main=="Clouds")
    {
        icon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        icon.src="clear.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        icon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        icon.src="rain.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        icon.src="mist.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        icon.src="snow.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    }
    
}

search.addEventListener("click",()=>{
    check(input.value)
});
