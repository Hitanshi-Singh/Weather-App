const apiKey = "47f8e67de51f752f4d770333c541bcba";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".weatherIcon");
const checkWeather = async (city) => {
  const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + " km/hr";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Mist" || data.weather[0].main == "Haze") {
    weatherIcon.src = "./images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/Drizzle.png";
  }
  document.getElementById("weatherDisplayArea").style.display = "block";
};
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
