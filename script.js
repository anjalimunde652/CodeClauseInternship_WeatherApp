const apiKey = "17a61cebf35c7d58fa26dde291bc2108";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("weatherCard").style.display = "block";

      document.getElementById("city").innerText = data.name;
      document.getElementById("temp").innerText =
        Math.round(data.main.temp) + "°C";
      document.getElementById("condition").innerText =
        data.weather[0].description;
      document.getElementById("humidity").innerText =
        data.main.humidity + "% Humidity";
      document.getElementById("wind").innerText =
        data.wind.speed + " km/h Wind";

      document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      alert(error.message);
    });
}
