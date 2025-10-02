// Adicionar ao script existente no index.html
document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backBtn');

    // Mostrar botão voltar apenas se houver histórico
    if (history.length > 1) {
        backBtn.style.display = 'flex';
    }
});