document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const articles = document.querySelectorAll('.post');

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase().trim(); // Texto digitado no campo de busca

    // Caso o campo de busca esteja vazio, mostrar todos os artigos
    if (searchText === '') {
      articles.forEach(article => {
        article.style.display = 'block'; // Mostra todos os artigos
      });
      return;
    }

    // Filtrar os artigos com base no texto digitado
    articles.forEach(article => {
      const title = article.querySelector('.title').textContent.toLowerCase(); // Pega o texto do título

      // Verifica se o título contém o texto digitado
      if (title.includes(searchText)) {
        article.style.display = 'block'; // Mostra o artigo que corresponde
      } else {
        article.style.display = 'none'; // Esconde os artigos que não correspondem
      }
    });
  });
});
