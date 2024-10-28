const fs = require("fs");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data/weatherData.json");
function readWeatherData() {
const data = fs.readFileSync(dataFilePath, "utf-8");
return JSON.parse(data);
}

function writeWeatherData(data) {
fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));}

module.exports = {
  getAllWeather: () => readWeatherData(),
  getCityWeather: (city) => {
const data = readWeatherData();
    return data.find((entry) => entry.city.toLowerCase() === city.toLowerCase());
  },

  addCityWeather: (newCityWeather) => {
const data = readWeatherData();
data.push(newCityWeather);
writeWeatherData(data);
  },

  changeRainStatus: (city, status) => {
    const data = readWeatherData();
    const cityWeather = data.find(
    (entry) => entry.city.toLowerCase() === city.toLowerCase()
    );
if (cityWeather) cityWeather.rain = status;
writeWeatherData(data);
  },

  removeCityWeather: (city) => {
    let data = readWeatherData();
data = data.filter(
(entry) => entry.city.toLowerCase() !== city.toLowerCase()
    );writeWeatherData(data);
  }
};
