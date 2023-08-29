document.addEventListener('DOMContentLoaded', function () {
    var celsiusInput = document.getElementById('celsiusInput');
    var fahrenheitInput = document.getElementById('fahrenheitInput');
    var convertirButton = document.getElementById('convertirButton');
    var temperaturaResultado = document.getElementById('temperaturaResultado');
    convertirButton.addEventListener('click', function () {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(celsius)) {
            var temperaturaFahrenheit = convertirTemperatura(celsius, Temperatura.Celsius, Temperatura.Fahrenheit);
            temperaturaResultado.textContent = "".concat(celsius, " \u00B0C equivale a ").concat(temperaturaFahrenheit.toFixed(2), " \u00B0F");
        }
        else if (!isNaN(fahrenheit)) {
            var temperaturaCelsius = convertirTemperatura(fahrenheit, Temperatura.Fahrenheit, Temperatura.Celsius);
            temperaturaResultado.textContent = "".concat(fahrenheit, " \u00B0F equivale a ").concat(temperaturaCelsius.toFixed(2), " \u00B0C");
        }
        else {
            temperaturaResultado.textContent = 'Ingresa al menos una temperatura válida';
        }
    });
    var Temperatura;
    (function (Temperatura) {
        Temperatura[Temperatura["Celsius"] = 0] = "Celsius";
        Temperatura[Temperatura["Fahrenheit"] = 1] = "Fahrenheit";
    })(Temperatura || (Temperatura = {}));
    function convertirTemperatura(valor, from, to) {
        if (from === Temperatura.Celsius && to === Temperatura.Fahrenheit) {
            return (valor * 9 / 5) + 32;
        }
        else if (from === Temperatura.Fahrenheit && to === Temperatura.Celsius) {
            return (valor - 32) * 5 / 9;
        }
        return valor; // Si no se necesita convertir
    }
});
