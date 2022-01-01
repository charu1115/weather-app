const apiKey = "67481a6421e4520f55050b3b8585b74c";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cros"
  });
  const respData = await resp.json();
  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = Ktoc(data.main.temp);
  const weather = document.createElement('div')
  weather.classList.add('weather');
  weather.innerHTML = `  
     <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>  
     <small>${data.weather[0].main}</small>  
     `;
  //  cleanup   
  main.innerHTML = "";
  main.appendChild(weather);
};

function Ktoc(K) {
  return Math.floor(K - 273.15);
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
});





function backgroundChange() {

  var imgs = document.getElementById("document");

  if (data.weather[0].main == Rain) {
    imgs.style.backgroundImage = "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";
  } else if (data.weather[0].main == Clouds) {
    imgs.style.backgroundImage = "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";
  } else if (data.weather[0].main == Clear) {
    imgs.style.backgroundImage = "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";
  } else {
    imgs.style.backgroundImage = "url(background.gif)";
  }
}