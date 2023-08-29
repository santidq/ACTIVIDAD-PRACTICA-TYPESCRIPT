document.addEventListener('DOMContentLoaded', () => {
    const oracionInput = document.getElementById('oracionInput') as HTMLInputElement;
    const contarButton = document.getElementById('contarButton') as HTMLButtonElement;
    const palabrasResultado = document.getElementById('palabrasResultado');

    contarButton.addEventListener('click', () => {
        const oracion = oracionInput.value;
        const cantidadPalabras = contarPalabras(oracion);
        palabrasResultado.textContent = `La oración "${oracion}" tiene ${cantidadPalabras} palabras.`;
    });

    function contarPalabras(oracion: string): number {
        const palabras = oracion.trim().split(/\s+/);
        return palabras.length;
    }
});

