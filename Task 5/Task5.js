const APIKEY = '75144f72b2f5874c7cd465092b56838a';
let button = document.querySelector('.Search');
let country = document.querySelector('.country');
let temperature = document.querySelector('.temperature');
let feel = document.querySelector('.feel');
let wind = document.querySelector('.wind');



async function getdetails() {
    try {
        let fielddata = document.getElementById('inputlocation').value;
        if (!fielddata) {
            alert("Enter Data First")
        }
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${fielddata}&appid=${APIKEY}&units=metric`;
        let response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        let data = await response.json();
        displaydata(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function displaydata(data) {
    if (data && data.main && data.weather && data.weather[0]) {
        country.textContent = `Location : ${data.name}`;
        temperature.textContent = `Temp : ${data.main.temp} °C`;
        feel.textContent = `Desc : ${data.weather[0].description}`;
        wind.textContent = `Wind Speed : ${data.wind.speed} Km`;
    } else {
        console.error('Invalid data format:', data);
    }
}

