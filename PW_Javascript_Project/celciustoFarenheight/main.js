const celcius = 45;

const fahrenheit = function (celcius) {
  // calculate fahrenheit
  const fahrenheit = celcius * 1.8 + 32;

  // display the result
  console.log(
    `${celcius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
  );
};

const value = fahrenheit(celcius);
