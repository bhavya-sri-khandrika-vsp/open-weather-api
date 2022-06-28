var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var press = document.querySelector(".press");
var humid = document.querySelector(".humd");

function startSearch() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value+
      "&appid=ff9a21a73ef5188be5c28d7268ba6ba8"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];
      var pressValue = data["main"]["pressure"];
      var humidValue = data["main"]["humidity"];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
      press.innerHTML = pressValue;
      humid.innerHTML = humidValue;

      if (descValue.includes("clouds")) {
        document.getElementById("heropic").src = "clearsky.gif";
      } else if (descValue.includes("rain")) {
        document.getElementById("heropic").src = "raingif.gif";
      } else if (descValue.includes("drizzle")) {
        document.getElementById("heropic").src = "drizzlegif.gif";
      } else if (descValue.includes("dust")) {
        document.getElementById("heropic").src = "dustysky.gif";
      } else if (descValue.includes("clear")) {
        document.getElementById("heropic").src = "sunny.gif";
      }
    })
    .catch((err) => {
      name.innerHTML = " ";
      temp.innerHTML = " ";
      desc.innerHTML = " ";
      press.innerHTML = " ";
      humid.innerHTML = " ";
      alert("wrong city name!");
    });
}

//on error msg display
