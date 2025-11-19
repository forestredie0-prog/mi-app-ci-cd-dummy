function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD! 🎉 Actualizado!';
}

function sumar(a, b) {
    return a + b; // Corregido
}

// Exportar para las pruebas (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar };
}
