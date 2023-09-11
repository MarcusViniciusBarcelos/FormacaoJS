const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const previousButton = document.getElementById('previousPage');
const limit = 30;
let offset = 0;

function loadPokemonItems(offset, limit) {
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="modal">
                    <div class="modal-content pokemon ${pokemon.type}">
                        <div>
                        <button class="close-button">&times;</button>
                        <span class="modal-number">#${pokemon.number}</span>
                        </div>
                        <div class="modal-img">
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                        <div class="modal-name">
                        <span class="name">${pokemon.name}</span>
                        </div>
                        <div class="modal-info">
                            <h4>Stats:</h4>
                            <ul>
                            ${pokemon.stats.map((stat) => `<li class="stats">${stat.name}: ${stat.base_stat}</li>`).join('')}
                            </ul>
                        </div> 
                    </div>
                </div>
            </li>
        `).join('');

        pokemonList.innerHTML = newHtml;

        const pokemonItems = document.querySelectorAll('.pokemon');

        pokemonItems.forEach((pokemonItem) => {
            pokemonItem.addEventListener('click', () => togglePokemonModal(pokemonItem));

            
            const closeButton = pokemonItem.querySelector('.close-button');
            const modal = pokemonItem.querySelector('.modal');

            closeButton.addEventListener('click', (event) => {
                event.stopPropagation();
                modal.style.display = 'none';
            });
        });
    });
}
function togglePokemonModal(pokemonItem) {
    const modal = pokemonItem.querySelector('.modal');
    modal.style.display = 'block';
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
});

previousButton.addEventListener('click', () => {
    offset = Math.max(0, offset - limit);
    loadPokemonItems(offset, limit);
});
