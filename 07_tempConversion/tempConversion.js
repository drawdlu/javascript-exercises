const convertToCelsius = function(numToConvert) {
  let celsius = (numToConvert - 32) * (5 / 9);
  return +celsius.toFixed(1);
};

const convertToFahrenheit = function(numToConvert) {
  let fahrenheit = numToConvert * (9 / 5) + 32
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
