// script.js
async function getWeather() {
    const location = document.getElementById('location').value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(location)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6552e26205msh70c0e8dc517b2c8p1beee7jsn4a5f65b3c0eb',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
}

function displayWeather(data) {
    const weather = data.current;
    const location = data.location;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Location:</strong> ${location.name}, ${location.country}</p>
        <p><strong>Temperature:</strong> ${weather.temp_c}°C</p>
        <p><strong>Condition:</strong> ${weather.condition.text}</p>
        <img src="${weather.condition.icon}" alt="${weather.condition.text}">
    `;
}
