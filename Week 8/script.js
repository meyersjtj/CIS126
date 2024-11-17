// change to your API
const API_key = "82fa57a2445c14d950b389763c1fc786";

// daily forecast API - https://openweathermap.org/forecast16
// const forecastURL = "https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}"

// geocoding API - https://openweathermap.org/api/geocoding-api
// const geoCodeURL = "https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
// const geoCodeZipURL = "https://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}"

// NOTE - api docs incorrectly show examples using http instead of https

const kelvinToF = (value) => {
  var fahrenheit = (((Number(value) - 273.15) * 9) / 5) + 32;
  return fahrenheit.toFixed(2);
}

$('button').on('click', async (e) => {
  e.preventDefault(); // Prevent default form submission

  let city = $("input[name='city']").val();
  let state = $("select[name='state']").val();
  let country = "US";
  let lat = "";
  let lon = "";
  let cnt = 1; // Set default value for cnt
  let forcast = {};
  console.log(city, state);

  // get lat/lon for city
  async function getLatLong() {
    const geoCodeURL = 'https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
    let limit = 1;
    const response = await fetch(geoCodeURL.replace('{city name}', city).replace('{state code}', state).replace('{country code}', country).replace('{limit}', limit).replace('{API key}', API_key));
    const data = await response.json();
    console.log(data);
    lat = data[0].lat;
    lon = data[0].lon;
    cnt = data[0].cnt;
    return;
  }

  async function getForecast() {
    const forecastURL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
    const response = await fetch(forecastURL.replace('{lat}', lat).replace('{lon}', lon).replace('{cnt}', "7").replace('{API key}', API_key));
    const data = await response.json();
    console.log(data);
    forecast = data;
    return forecast;
  }

  async function displayForecast() {
    let forecast = await getForecast();
    document.write('<h3>5 Day Forecast</h3>');
    for (let i = 0; i < 5; i++) {
      let day = forecast.daily[i];
      let date = new Date(day.dt * 1000);
      let icon = day.weather[0].icon;
      let tempHigh = kelvinToF(day.temp.max);
      let tempLow = kelvinToF(day.temp.min);
      let humidity = day.humidity;
      let desc = day.weather[0].description;
      document.write('<div class="forecast">');
      document.write('<h4>' + date + '</h4>');
      document.write('<img src="http://openweathermap.org/img/wn/' + icon + '.png" alt="' + desc + '">');
      document.write('<p>' + desc + '</p>');
      document.write('<p>High: ' + tempHigh + '°F</p>');
      document.write('<p>Low: ' + tempLow + '°F</p>');
      document.write('<p>Humidity: ' + humidity + '%</p>');
      document.write('</div>');
      
    
    }
  }

  async function main() {
    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    await getLatLong();
    console.log(lat, lon, cnt);
    displayForecast();
  }

  main();
});

