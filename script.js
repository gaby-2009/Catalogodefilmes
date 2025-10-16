// 1. ARMAZENAMENTO DE DADOS
    const catalogo = [];

    // 2. CAPTURA DE ELEMENTOS DO DOM (Input e Contêineres)
    const form = document.getElementById('cadastro-filme');
    const listaFilmesContainer = document.getElementById('lista-filmes');
    const mensagemVazia = document.getElementById('mensagem-vazia');
    
    const inputTitulo = document.getElementById('titulo');
    const inputSinopse = document.getElementById('sinopse');
    const inputAno = document.getElementById('ano');
    const selectGenero = document.getElementById('genero');
    const inputNota = document.getElementById('nota');


    // ------------------------------------
    // FUNÇÃO DE REMOÇÃO
    // ------------------------------------
    /**
    * Remove um filme do array de dados e do elemento HTML na tela.
    * @param {number} indice - A posição do filme no array 'catalogo'.
    * @param {HTMLElement} elementoDOM - O elemento <div> do filme a ser removido da tela.
    */
    function removerFilme(indice, elementoDOM) {
        // 1. Remove o filme do array
        catalogo.splice(indice, 1);
        
        // 2. Remove o elemento HTML da tela
        elementoDOM.remove();

        // 3. Verifica se a lista está vazia para mostrar a mensagem
        if (catalogo.length === 0) {
            mensagemVazia.style.display = 'block';
        }

        // Importante: Após a remoção, é necessário redesenhar a lista 
        // ou recriar os listeners de remoção, pois os índices mudaram.
        // Uma solução mais simples para o DOM Básico é redesenhar.
        renderizarCatalogo();
    }


    // ------------------------------------
    // FUNÇÃO DE RENDERIZAÇÃO (Desenha o HTML)
    // ------------------------------------
    function renderizarCatalogo() {
        // Limpa o contêiner atual
        listaFilmesContainer.innerHTML = '';
        
        if (catalogo.length === 0) {
            // Se o array está vazio, mostra a mensagem e para a função
            listaFilmesContainer.appendChild(mensagemVazia);
            mensagemVazia.style.display = 'block';
            return;
        } else {
             mensagemVazia.style.display = 'none';
        }

        catalogo.forEach((filme, index) => {
            // 1. Cria o elemento principal do card
            const filmeCard = document.createElement('div');
            filmeCard.classList.add('filme-card');
            
            // 2. Define o conteúdo HTML interno
            filmeCard.innerHTML = `
                <h3>${filme.titulo} (${filme.ano})</h3>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p><strong>Nota:</strong> ${filme.nota.toFixed(1)}/10</p>
                <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
                <button class="btn-remover">Remover</button>
            `;
            
            // 3. Adiciona o listener de remoção ao botão recém-criado
            const btnRemover = filmeCard.querySelector('.btn-remover');
            btnRemover.addEventListener('click', () => {
                // Passa o índice atual (que está correto no loop) e o elemento a ser removido
                removerFilme(index, filmeCard); 
            });

            // 4. Adiciona o card ao contêiner da lista
            listaFilmesContainer.appendChild(filmeCard);
        });
    }

    // ------------------------------------
    // FUNÇÃO DE CADASTRO (Ao enviar o formulário)
    // ------------------------------------
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão (recarregar a página)
        event.preventDefault();

        // 1. Cria o objeto com os dados do filme
        const novoFilme = {
            titulo: inputTitulo.value,
            sinopse: inputSinopse.value,
            // Converte para Number, garantindo o tipo correto
            ano: Number(inputAno.value), 
            genero: selectGenero.options[selectGenero.selectedIndex].text,
            nota: Number(inputNota.value),
        };

        // 2. Adiciona o novo filme ao array global
        catalogo.push(novoFilme);

        // 3. Atualiza a lista na tela (redesenha)
        renderizarCatalogo();

        // 4. Limpa o formulário para o próximo cadastro
        form.reset();
        
        // Coloca o foco no primeiro campo
        inputTitulo.focus(); 
    });
    
    // RENDERIZAÇÃO INICIAL
    renderizarCatalogo();