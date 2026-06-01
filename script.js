// Função simples para interagir com o mini-quiz do site
function checkAnswer(isTrue) {
    const resultElement = document.getElementById("quiz-result");
    
    if (isTrue) {
        resultElement.innerText = "Correto! 🎉 A água se renova através do ciclo hidrológico, tornando-a uma fonte inesgotável.";
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.innerText = "Incorreto. ❌ Lembre-se que a água faz parte de um ciclo natural renovável!";
        resultElement.style.color = "#e74c3c";
    }
}
