const apiKey = "652194aaa0a6828683a55e6c24cf187b";
const cityName = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const cities = document.getElementById("city-group");



cities.addEventListener("change", (e) => {


  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apiKey}`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      cityName.innerText = data.name;
      description.innerText = data.weather[0].description;
      temperature.innerText = Math.trunc(data.main.temp - 273.5);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
