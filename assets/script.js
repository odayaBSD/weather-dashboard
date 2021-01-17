var citySearch = document.querySelector("#city-search");
var cityInputEl = document.querySelector("#city");

var getCityData = function(city) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=aba5ba8bf6ca29b364deececed3fe28b";

  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      getWeatherData(lat, lon);
    })
  })
  
}

var getWeatherData = function (lat, lon) {
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon="+ lon + "&exclude=hourly,minutely,alerts&appid=aba5ba8bf6ca29b364deececed3fe28b";

  fetch(apiUrl).then(function (response) {
    response.json().then(function(data) {
      console.log(data);
    })
  })
}

var searchSubmitHandler = function(event) {
  event.preventDefault();

  var cityName = cityInputEl.value.trim();
  if (cityName) {
    getCityData(cityName);
  } else {
    alert("Please enter a city");
  }
}

citySearch.addEventListener("submit", searchSubmitHandler);
//getCityData("Toronto");


