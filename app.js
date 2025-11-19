function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD! 🎉';
}

// Función para sumar (la probaremos con Jest)
function sumar(a, b) {
    return a + b;
}

// Exportar para las pruebas (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar };
}
