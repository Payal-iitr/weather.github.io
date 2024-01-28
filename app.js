
      const apiKey = "254dd6d017195168f966ad312caada61"; // Replace with your OpenWeatherMap API key

      function getWeather() {
        const inputField = document.getElementById("searchInput");
        const location = inputField.value;
        
        if (location.trim() === " ") {
          alert("Please enter a valid location.");
          return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
          .then(response => response.json())
          .then(data => {
            displayWeather(data);
          })
          .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data. Please try again.");
          });
      }

      function displayWeather(data) {
        const weatherInfo = document.getElementById("weatherInfo");
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;

        weatherInfo.innerHTML = `
          <p>Temperature: ${temperature} °C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Description: ${description}</p>
        `;
      }

      function toggleUnit() {
        const unitToggle = document.getElementById("unitToggle");
        const weatherInfo = document.getElementById("weatherInfo");
        const currentTemperature = parseFloat(weatherInfo.querySelector("p:first-child").innerText.split(" " )[1]);

        if (unitToggle.checked) {
          // Switch to Fahrenheit
          const fahrenheitTemperature = (currentTemperature * 9/5) + 32;
          weatherInfo.querySelector('p:first-child').innerText = `Temperature: ${fahrenheitTemperature.toFixed(2)} °F`;
        } else {
          // Switch back to Celsius
          weatherInfo.querySelector('p:first-child').innerText = `Temperature: ${currentTemperature.toFixed(2)} °C`;
        }
      }
   