const searchBox = document.querySelector(".search input");
const celsius = document.getElementById("c");
const fahrenheit = document.getElementById("f");
let convertedTemp = 0;

function toCelsius() {
    const inputValue = parseFloat(searchBox.value);

    if (!isNaN(inputValue)) {
        convertedTemp = (inputValue - 32) * 5 / 9;
        document.querySelector(".content h1").innerHTML = convertedTemp.toFixed(2) + "°C";
    } else {
        document.querySelector(".content h1").innerHTML = "Enter a valid value";
    }

    setTimeout(() => {
        searchBox.value = "";
    }, 100);
}

function toFahrenheit() {
    const inputValue = parseFloat(searchBox.value);

    if (!isNaN(inputValue)) {
        convertedTemp = (inputValue * 9/5) + 32;
        document.querySelector(".content h1").innerHTML = convertedTemp.toFixed(2) + "°F";
    } else {
        document.querySelector(".content h1").innerHTML = "Enter a valid value";
    }

    setTimeout(() => {
        searchBox.value = "";
    }, 100);
}

// Add event listeners to call the conversion functions when the buttons are clicked
celsius.addEventListener("click", toCelsius);
fahrenheit.addEventListener("click", toFahrenheit);
