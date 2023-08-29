document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const numberButtons = document.querySelectorAll('.number') as NodeListOf<HTMLButtonElement>;
    const operationButtons = document.querySelectorAll('.operation') as NodeListOf<HTMLButtonElement>;
    const calculateButton = document.getElementById('calculate') as HTMLButtonElement;
    const clearButton = document.getElementById('clear') as HTMLButtonElement;

    let currentInput = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.textContent;
            display.value = currentInput;
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += ` ${button.textContent} `;
            display.value = currentInput;
        });
    });

    calculateButton.addEventListener('click', () => {
        try {
            const result = eval(currentInput);
            display.value = result.toString();
            currentInput = result.toString();
        } catch (error) {
            display.value = 'Error';
            currentInput = '';
        }
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
        currentInput = '';
    });
});


