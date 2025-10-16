  // 1. ARMAZENAMENTO DE DADOS
    // Array global que irá guardar todos os filmes como Objetos.
    // Ex: [{ titulo: 'Filme X', sinopse: 'Sinopse Y', ano: 2023, genero: 'Drama', nota: 8.5 }]
    const catalogo = [];

    // 2. CAPTURA DE ELEMENTOS DO DOM (Document Object Model)
    const form = document.getElementById('cadastro-filme');
    const listaFilmesContainer = document.getElementById('lista-filmes');
    
    // NOVAS VARIÁVEIS PARA OS NOVOS CAMPOS DO FORMULÁRIO (Para serem usadas futuramente na função de adicionar)
    const inputTitulo = document.getElementById('titulo');
    const inputSinopse = document.getElementById('sinopse');
    const inputAno = document.getElementById('ano');
    const selectGenero = document.getElementById('genero');
    const inputNota = document.getElementById('nota');


   // ------------------------------------
   // FUNÇÃO DE REMOÇÃO (Mantida do original)
   // ------------------------------------
   /**
   * Remove um filme do array de dados e do elemento HTML na tela.
   * @param {number} indice - A posição do filme no array 'catalogo'.
   * @param {HTMLElement} elementoDOM - O elemento <div> do filme a ser removido da tela.
   */
  function removerFilme(indice, elementoDOM) {
    // // A. REMOÇÃO DO ARRAY (Lógica)
    // // splice(indice, 1) remove 1 elemento a partir da posição 'indice'.
    // // Isso atualiza o array 'catalogo'.
    catalogo.splice(indice, 1);
  }
