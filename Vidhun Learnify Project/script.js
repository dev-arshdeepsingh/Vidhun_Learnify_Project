function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputScale = document.getElementById("inputScale").value;
  
    let result;
  
    if (isNaN(inputTemp)) {
      result = "Please enter a valid number.";
    } else {
      switch (inputScale) {
        case "C":
          result = `Fahrenheit: ${(inputTemp * 9) / 5 + 32} °F, Kelvin: ${
            inputTemp + 273.15
          } K`;
          break;
        case "F":
          result = `Celsius: ${((inputTemp - 32) * 5) / 9} °C, Kelvin: ${
            ((inputTemp - 32) * 5) / 9 + 273.15
          } K`;
          break;
        case "K":
          result = `Celsius: ${inputTemp - 273.15} °C, Fahrenheit: ${
            ((inputTemp - 273.15) * 9) / 5 + 32
          } °F`;
          break;
        default:
          result = "Invalid scale.";
      }
    }
  
    document.getElementById("result").innerText = result;
  }
  