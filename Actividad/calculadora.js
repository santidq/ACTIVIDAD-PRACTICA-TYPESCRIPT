document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');
    var numberButtons = document.querySelectorAll('.number');
    var operationButtons = document.querySelectorAll('.operation');
    var calculateButton = document.getElementById('calculate');
    var clearButton = document.getElementById('clear');
    var currentInput = '';
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += button.textContent;
            display.value = currentInput;
        });
    });
    operationButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentInput += " ".concat(button.textContent, " ");
            display.value = currentInput;
        });
    });
    calculateButton.addEventListener('click', function () {
        try {
            var result = eval(currentInput);
            display.value = result.toString();
            currentInput = result.toString();
        }
        catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    });
    clearButton.addEventListener('click', function () {
        display.value = '';
        currentInput = '';
    });
});
