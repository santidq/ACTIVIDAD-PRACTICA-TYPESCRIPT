document.addEventListener('DOMContentLoaded', () => {
    const startInput = document.getElementById('start') as HTMLInputElement;
    const endInput = document.getElementById('end') as HTMLInputElement;
    const countButton = document.getElementById('countButton') as HTMLButtonElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    countButton.addEventListener('click', () => {
        const start = parseInt(startInput.value);
        const end = parseInt(endInput.value);

        if (isNaN(start) || isNaN(end)) {
            resultDiv.textContent = 'Ingresa valores válidos';
            return;
        }

        let evenCount = 0;
        let oddCount = 0;

        for (let number = start; number <= end; number++) {
            if (number % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        resultDiv.textContent = `Números Pares: ${evenCount}, Números Impares: ${oddCount}`;
    });
});
