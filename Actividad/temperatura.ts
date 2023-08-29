document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsiusInput') as HTMLInputElement;
    const fahrenheitInput = document.getElementById('fahrenheitInput') as HTMLInputElement;
    const convertirButton = document.getElementById('convertirButton') as HTMLButtonElement;
    const temperaturaResultado = document.getElementById('temperaturaResultado');

    convertirButton.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsius)) {
            const temperaturaFahrenheit = convertirTemperatura(celsius, Temperatura.Celsius, Temperatura.Fahrenheit);
            temperaturaResultado.textContent = `${celsius} °C equivale a ${temperaturaFahrenheit.toFixed(2)} °F`;
        } else if (!isNaN(fahrenheit)) {
            const temperaturaCelsius = convertirTemperatura(fahrenheit, Temperatura.Fahrenheit, Temperatura.Celsius);
            temperaturaResultado.textContent = `${fahrenheit} °F equivale a ${temperaturaCelsius.toFixed(2)} °C`;
        } else {
            temperaturaResultado.textContent = 'Ingresa al menos una temperatura válida';
        }
    });

    enum Temperatura {
        Celsius,
        Fahrenheit,
    }

    function convertirTemperatura(valor: number, from: Temperatura, to: Temperatura): number {
        if (from === Temperatura.Celsius && to === Temperatura.Fahrenheit) {
            return (valor * 9 / 5) + 32;
        } else if (from === Temperatura.Fahrenheit && to === Temperatura.Celsius) {
            return (valor - 32) * 5 / 9;
        }
        return valor; // Si no se necesita convertir
    }
});
