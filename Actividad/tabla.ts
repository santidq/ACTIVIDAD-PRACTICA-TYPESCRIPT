document.addEventListener('DOMContentLoaded', () => {
    const numeroInput = document.getElementById('numeroInput') as HTMLInputElement;
    const limiteInput = document.getElementById('limiteInput') as HTMLInputElement;
    const generarButton = document.getElementById('generarButton') as HTMLButtonElement;
    const tablaResultado = document.getElementById('tablaResultado');

    generarButton.addEventListener('click', () => {
        const numero = parseInt(numeroInput.value);
        const limite = parseInt(limiteInput.value);

        if (isNaN(numero) || isNaN(limite)) {
            tablaResultado.textContent = 'Ingresa valores válidos';
            return;
        }

        const tabla = generarTablaDeMultiplicar(numero, limite);
        tablaResultado.innerHTML = tabla;
    });

    function generarTablaDeMultiplicar(numero: number, limite: number): string {
        let tablaHTML = '<table>';
        tablaHTML += '<tr><th>Multiplican</th><th>Resultado</th></tr>';

        for (let i = 1; i <= limite; i++) {
            tablaHTML += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
        }

        tablaHTML += '</table>';
        return tablaHTML;
    }
});
