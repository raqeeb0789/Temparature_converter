document.getElementById('submit').addEventListener('click', function () {
    const tempValue = parseFloat(document.getElementById('value').value); 
    const fahrenheitToCelsius = document.getElementById('fahrenheitToCelsius').checked;
    const celsiusToFahrenheit = document.getElementById('celsiusToFahrenheit').checked;
    let temp; 

    if (fahrenheitToCelsius) {
        temp = ((tempValue - 32) * 5 / 9).toFixed(2) + ' °C';
    } else if (celsiusToFahrenheit) {
        temp = ((tempValue * 9 / 5) + 32).toFixed(2) + ' °F';
    } else {
        temp = 'Please select a conversion option.';
    }

    
    document.getElementById('sol').textContent = `The converted temparature is : ${temp}` ;
});
