function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD y Docker! 🚠️';
}

// Función para sumar (la probaremos con Jest)
function sumar(a, b) {
    return a + b;
}

// Exportar la función para las pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar };
}
