document.addEventListener('DOMContentLoaded', function () {
    var oracionInput = document.getElementById('oracionInput');
    var contarButton = document.getElementById('contarButton');
    var palabrasResultado = document.getElementById('palabrasResultado');
    contarButton.addEventListener('click', function () {
        var oracion = oracionInput.value;
        var cantidadPalabras = contarPalabras(oracion);
        palabrasResultado.textContent = "La oraci\u00F3n \"".concat(oracion, "\" tiene ").concat(cantidadPalabras, " palabras.");
    });
    function contarPalabras(oracion) {
        var palabras = oracion.trim().split(/\s+/);
        return palabras.length;
    }
});
