async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById('weather-results').innerHTML = `<p>${data.message}</p>`;
        } else {
            const weather = {
                name: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                description: data.weather[0].description,
            };
            displayWeather(weather);
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

function displayWeather(weather) {
    const weatherHtml = `
        <h2>${weather.name}, ${weather.country}</h2>
        <p>Temperature: ${weather.temp} °C</p>
        <p>Weather: ${weather.description}</p>
    `;
    document.getElementById('weather-results').innerHTML = weatherHtml;
}
