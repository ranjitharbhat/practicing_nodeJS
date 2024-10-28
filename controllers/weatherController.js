const weatherModel = require("../models/weatherModel");

exports.showAllDetails = (req, res) => {
  res.status(200).json(weatherModel.getAllWeather());
};

exports.showRainDetails = (req, res) => {
  const rainDetails = weatherModel.getAllWeather().filter((city) => city.rain === "yes");
  res.status(200).json(rainDetails);
};

exports.addNewCityTempDetails = (req, res) => {
  const newCityWeather = req.body;
  weatherModel.addCityWeather(newCityWeather);
  res.status(201).json({ message: "City weather details added", newCityWeather });
};


exports.changeRainDetails = (req, res) => {
  weatherModel.changeRainStatus("Udupi", "no");
  res.status(200).json({ message: "Rain status changed for Udupi to 'no'" });
};

exports.removeCityDetails = (req, res) => {
  weatherModel.removeCityWeather("Agra");
  res.status(200).json({ message: "Weather details for Agra removed" });
};

exports.showCityDetail = (req, res) => {
  const city = req.params.city;
  const cityWeather = weatherModel.getCityWeather(city);
  if (cityWeather) {
    res.status(200).json(cityWeather);
  } else {
    res.status(404).json({ message: `No details found for city: ${city}` });
  }
};
