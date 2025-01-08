document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('query') ? params.get('query').toLowerCase().trim() : '';

  const articles = [
    {
      title: 'Navegando por Paraísos Escondidos',
      description: 'Imagine-se em um barco de madeira deslizando suavemente sobre águas cristalinas...',
      link: 'Paginas/Site 1/index.html'
    },
    {
      title: 'A Magia das Cachoeiras',
      description: 'Poucas coisas são tão hipnotizantes quanto a força e a beleza de uma cachoeira...',
      link: 'Paginas/Site 2/index.html'
    },
    {
      title: 'A Imensidão do Céu',
      description: 'Por fim, a experiência de assistir a balões de ar quente pintando o céu ao amanhecer...',
      link: 'Paginas/Site 3/index.html'
    }
  ];

  const resultsContainer = document.getElementById('search-results');

  if (!query) {
    resultsContainer.innerHTML = '<p>Digite algo na busca para ver os resultados.</p>';
    return;
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.description.toLowerCase().includes(query)
  );

  if (filteredArticles.length === 0) {
    resultsContainer.innerHTML = `<p>Nenhum resultado encontrado para: <strong>${query}</strong></p>`;
  } else {
    filteredArticles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('search-result');

      articleElement.innerHTML = `
        <h4><a href="${article.link}">${article.title}</a></h4>
        <p>${article.description}</p>
      `;

      resultsContainer.appendChild(articleElement);
    });
  }
});
