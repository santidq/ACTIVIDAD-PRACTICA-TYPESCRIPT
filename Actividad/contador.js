document.addEventListener('DOMContentLoaded', function () {
    var startInput = document.getElementById('start');
    var endInput = document.getElementById('end');
    var countButton = document.getElementById('countButton');
    var resultDiv = document.getElementById('result');
    countButton.addEventListener('click', function () {
        var start = parseInt(startInput.value);
        var end = parseInt(endInput.value);
        if (isNaN(start) || isNaN(end)) {
            resultDiv.textContent = 'Ingresa valores válidos';
            return;
        }
        var evenCount = 0;
        var oddCount = 0;
        for (var number = start; number <= end; number++) {
            if (number % 2 === 0) {
                evenCount++;
            }
            else {
                oddCount++;
            }
        }
        resultDiv.textContent = "N\u00FAmeros Pares: ".concat(evenCount, ", N\u00FAmeros Impares: ").concat(oddCount);
    });
});
