// Passo 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem');

// Passo 2 - Adicionar a classe selecionado do personagem que o usuário passar o cursor do mouse.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        // Esse código é usado em celular.
        if (window.innerWidth  < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // Passo 3 - Verificar se já existe personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição  do personagem grande.
        // Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        // Passo 2 - alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // Passo 3 - alterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 4 - alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})