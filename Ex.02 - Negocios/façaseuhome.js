var botao = document.getElementById('mostrarConteudo');
var conteudo = document.getElementById('conteudoOculto');

botao.addEventListener('click', function() {
    // Adiciona ou remove a classe 'visivel' para mostrar ou ocultar o conteúdo
    conteudo.classList.toggle('visivel');
});