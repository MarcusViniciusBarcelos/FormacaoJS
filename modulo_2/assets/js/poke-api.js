

const pokeAPI = {}

function convertPokeAPIDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types 
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    const stats = pokeDetail.stats.map((stat) => ({
        name: stat.stat.name,
        base_stat: stat.base_stat,
    }));
    const [stat] = stats
    pokemon.stats = stats
    pokemon.stat = stat

    return pokemon  
}

pokeAPI.getPokemonDetail = (pokemon) => {
   return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeAPIDetailToPokemon)
}

pokeAPI.getPokemons = (offset=0, limit=30) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetail))
        .then((detailRequests) =>Promise.all(detailRequests))
        .then((pokemonsDatails) => pokemonsDatails)
}
