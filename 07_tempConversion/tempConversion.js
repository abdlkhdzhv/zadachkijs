const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9
  return ((fahrenheit - 32) * 5 / 9).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  return celsius * 9 / 5 + 32
};

// это тоже нельзя (!)
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
