window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {

    document.getElementById("convertButton").addEventListener("click", handleConvert);

    document.getElementById("c-in").addEventListener("input", function() {
        document.getElementById("f-in").value = "";
    });

    document.getElementById("f-in").addEventListener("input", function() {
        document.getElementById("c-in").value = "";
    });
}

function handleConvert() {
    const C_input = document.getElementById("c-in").value;
    const F_input = document.getElementById("f-in").value;

    let result;
    if (C_input !== "") {
        // Convert Celsius to Fahrenheit
        const C = parseFloat(C_input);
        result = convertCtoF(C);
        document.getElementById("f-in").value = result.toFixed(2); // Show result in °F
        displayWeatherIcon(result);
    } else if (F_input !== "") {
        // Convert Fahrenheit to Celsius
        const F = parseFloat(F_input);
        result = convertFtoC(F);
        document.getElementById("c-in").value = result.toFixed(2); // Show result in °C
        displayWeatherIcon(F);
    } else {
        document.getElementById("message").innerText = "Enter a temperature to convert.";
        document.getElementById("weatherIcon").src = "images/C-F.png"; 
    }
}

function convertCtoF(C) {
    // Return temperature in °F
    return (C * 9/5) + 32;
}

function convertFtoC(F) {
    // Return temperature in °C
    return (F - 32) * 5/9;
}

function displayWeatherIcon(temp) {
    let iconSrc;

    if (temp <= 32 && temp > -200) {
        iconSrc = "images/cold.png";
    } else if (temp >= 90 && temp < 200) {
        iconSrc = "images/hot.png";
    } else if (temp > 32 && temp < 90) {
        iconSrc = "images/cool.png";
    } else if (temp >= 200 || temp <= -200) {
        iconSrc = "images/dead.png";
    }

    document.getElementById("weatherIcon").src = iconSrc;
}
