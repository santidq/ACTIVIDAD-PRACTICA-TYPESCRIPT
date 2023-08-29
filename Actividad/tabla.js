document.addEventListener('DOMContentLoaded', function () {
    var numeroInput = document.getElementById('numeroInput');
    var limiteInput = document.getElementById('limiteInput');
    var generarButton = document.getElementById('generarButton');
    var tablaResultado = document.getElementById('tablaResultado');
    generarButton.addEventListener('click', function () {
        var numero = parseInt(numeroInput.value);
        var limite = parseInt(limiteInput.value);
        if (isNaN(numero) || isNaN(limite)) {
            tablaResultado.textContent = 'Ingresa valores válidos';
            return;
        }
        var tabla = generarTablaDeMultiplicar(numero, limite);
        tablaResultado.innerHTML = tabla;
    });
    function generarTablaDeMultiplicar(numero, limite) {
        var tablaHTML = '<table>';
        tablaHTML += '<tr><th>Resultado</th></tr>';
        for (var i = 1; i <= limite; i++) {
            tablaHTML += "<tr><td>".concat(numero, " x ").concat(i, "</td><td>").concat(numero * i, "</td></tr>");
        }
        tablaHTML += '</table>';
        return tablaHTML;
    }
});
